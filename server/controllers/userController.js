const { poolPromise } = require('../db')
const sql = require('mssql')
const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
var md5 = require('md5');


const generateJwt = (login, password, email) => {
    return  jwt.sign(
              {login, password, email}, 
              process.env.SECRET_KEY,
              {expiresIn: '1h'}
            )
}

const md5Pass = (pass, login) => {
    const passHash = md5(pass + login)
    console.log(`passHash: ${passHash}`)
    const shortPassHash = passHash.slice(0,20)
    console.log(`shortPassHassh: ${shortPassHash}`)
    return shortPassHash
} 

const passMD5Check = async (pass, login) => {
    const hashPass = md5(pass + login)
    const shortHash =  hashPass.slice(0,20)
    const pool = await poolPromise
    const request = pool.request()
    const acc = await request
    .input('memb___id', sql.VarChar(10), login)
    .query('SELECT memb.memb__pwd AS userPass FROM dbo.MEMB_INFO memb WHERE memb.memb___id = @memb___id')
    if(acc.recordset.length != 0) {
            console.log(`shortHash from check: ${shortHash}`);
            console.log(acc.recordset);
            const checkPwd = shortHash === acc.recordset[0].userPass
            console.log(`checkPwd:${checkPwd}`)
            return checkPwd
    }
}

async function findOneUserEmail(email) {
    const pool = await poolPromise
    const request = pool.request()
    const acc = await request
    .input('mail_addr', sql.VarChar(50), email)
    .query('SELECT memb.mail_addr AS user_email FROM dbo.MEMB_INFO memb WHERE memb.mail_addr = @mail_addr')
    return acc
}
async function findOneUserLogin(login) {
    const pool = await poolPromise
    const request = pool.request()
    const acc = await request
    .input('memb___id', sql.VarChar(10), login)
    .query('SELECT memb.memb___id AS user_login FROM dbo.MEMB_INFO memb WHERE memb.memb___id = @memb___id')
    return acc
}
async function findUserAnswer(answer) {
    const pool = await poolPromise
    const request = pool.request()
    const acc = await request
    .input('fpas_answ', sql.VarChar(10), answer)
    .query('SELECT memb.memb___id AS user_login FROM dbo.MEMB_INFO memb WHERE memb.fpas_answ = @fpas_answ')
    return acc
}
async function findVoteUser(login, site) {
    const pool = await poolPromise
    const request = pool.request()
    const voteUserDate = await request
    .input('accName', sql.VarChar(10), login)
    .input('voteSite', sql.VarChar(20), site)
    .query('SELECT v.voteDate FROM dbo.Vote_Acc_Info v WHERE v.accName = @accName AND v.voteSite = @voteSite')
    console.log(voteUserDate.recordset)
    return voteUserDate 
}
async function addVoteUser(login, site, date, ip) {
        const pool = await poolPromise
        const request = pool.request()
            const addVoteUser = await request
            .input('accName', sql.VarChar(10), login)
            .input('voteSite', sql.VarChar(20), site)
            .input('voteIp', sql.VarChar(15), ip)
            .input('voteDate', sql.SmallDateTime(), date)
            .query('INSERT INTO dbo.Vote_Acc_Info (accName, voteSite, voteDate, voteIp) VALUES (@accName, @voteSite, @voteDate, @voteIp)')
            console.log("Voted from addVoteUser")
            return addVoteUser
}
async function updateVoteUser(login, site, date, ip) {
            const pool = await poolPromise
            const request = pool.request()
                const updateVoteUser = await request
                .input('accName', sql.VarChar(10), login)
                .input('voteSite', sql.VarChar(20), site)
                .input('voteDate', sql.SmallDateTime(), date)
                .input('voteIp', sql.VarChar(15), ip)
                .query('UPDATE dbo.Vote_Acc_Info SET voteDate = @voteDate WHERE accName = @accName AND voteSite = @voteSite')
                console.log("Voted from updateVoteUser")
                return updateVoteUser
}

class UserController {
    async  userVoteTOPG(req, res, next) {
        const {p_resp, ip} = req.query
        const pool = await poolPromise
        const request = pool.request()
        const voteDate = await findVoteUser(p_resp, "TOPG")
        const d = new Date()
        if(voteDate.recordset.length == 0) {
            await addVoteUser(p_resp, "TOPG", d, ip)
            const vote = await request
            .input('AccountID', sql.VarChar(10), p_resp)
            .input('Type', sql.Int(), 0)
            .input('Coin', sql.Float(), 3)
            .execute('dbo.WZ_IBS_AddCoin')
            console.log("vote 1st if");
            return res.json(vote.recordset[0].RESULT)
        }
        else if(voteDate.recordset.length != 0) {
            const dateNowInMS = Date.now()
            const voteDateInMS = Date.parse(voteDate.recordset[0].voteDate)
            const dateDifference = dateNowInMS - voteDateInMS
            if(dateDifference > 21600000) {
                await updateVoteUser(p_resp, "TOPG", d, ip)
                const vote = await request
                .input('AccountID', sql.VarChar(10), p_resp)
                .input('Type', sql.Int(), 0)
                .input('Coin', sql.Float(), 3)
                .execute('dbo.WZ_IBS_AddCoin')
                console.log("vote 2nd if");
                return res.json(vote.recordset[0].RESULT)
            } else{
            return next(ApiError.internal("you have already voted!"))
        }
        }
        else{
            return next(ApiError.internal("ooops... something went wrong"))
        }
    }
    async  userVoteExtremetop100(req, res) {
        const {custom} = req.query
        const pool = await poolPromise
        const request = pool.request()
        const vote = await request
        .input('AccountID', sql.VarChar(10), custom)
        .input('Type', sql.Int(), 0)
        .input('Coin', sql.Float(), 5)
        .execute('dbo.WZ_IBS_AddCoin')
        console.log(vote.recordset[0]);
        return res.json(vote.recordset[0].RESULT)
    }
    async  userVoteTop100arena(req, res) {
        const {postback} = req.query
        const pool = await poolPromise
        const request = pool.request()
        const vote = await request
        .input('AccountID', sql.VarChar(10), postback)
        .input('Type', sql.Int(), 0)
        .input('Coin', sql.Float(), 10)
        .execute('dbo.WZ_IBS_AddCoin')
        console.log(vote.recordset[0]);
        return res.json(vote.recordset[0].RESULT)
    }
    async  userVoteArenaTop100(req, res, next) {
        const {voted, userid, userip} = req.query
        if(voted == 1) {
            const pool = await poolPromise
            const request = pool.request()
            const vote = await request
            .input('AccountID', sql.VarChar(10), userid)
            .input('Type', sql.Int(), 0)
            .input('Coin', sql.Float(), 5)
            .execute('dbo.WZ_IBS_AddCoin')
            console.log(vote.recordset[0].RESULT);
            return res.json(vote.recordset[0].RESULT)
        } else {
            return next(ApiError.internal("Something went wrong..."))
        }
    }
    async createAccount(req, res, next) {
        const {login, password, name, email, date, regQuestion, regAnswer} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest("Wrong password or email!"))
        }
        const candidateEmail = await findOneUserEmail(email)
        console.log(candidateEmail.recordset.length);
        if(candidateEmail.recordset.length != 0) {
            return next(ApiError.internal("User with this E-mail already exist!"))
        }
        const candidateLogin = await findOneUserLogin(login)
        if(candidateLogin.recordset.length != 0) {
            return next(ApiError.internal("User with this Login already exist!"))
        }
        // const encryptedPwd = md5Pass(password, login)
        const pool = await poolPromise
        const request = pool.request()
        const acc = await request
            // .input('memb_guid', sql.Int, 2)
            // .input('memb___id', sql.VarChar(10), login)
            // .input('memb__pwd', sql.VarChar(20), encryptedPwd)
            // .input('memb_name', sql.VarChar(10), name)
            // .input('mail_addr', sql.VarChar(50), email)
            // .input('fpas_ques', sql.VarChar(50), regQuestion)
            // .input('fpas_answ', sql.VarChar(50), regAnswer)
            // .input('sno__numb', sql.Char(13), "1234567890")
            // .input('mail_chek', sql.Char(1), "0")
            // .input('bloc_code', sql.Char(1), "0")
            // .input('ctl1_code', sql.Char(1), "0")
            // .input('JoinDate', sql.VarChar(25), date)
            // .query(`INSERT INTO dbo.MEMB_INFO ( memb___id, memb__pwd, memb_name, mail_addr, fpas_ques, fpas_answ, sno__numb, mail_chek, bloc_code, ctl1_code, JoinDate) VALUES ( @memb___id, @memb__pwd, @memb_name, @mail_addr, @fpas_ques, @fpas_answ, @sno__numb, @mail_chek, @bloc_code, @ctl1_code, @JoinDate)`)
            .input('accLogin', sql.VarChar(10), login)
            .input('pass', sql.VarChar(20), password)
            .input('accName', sql.VarChar(10), name)
            .input('accMail', sql.VarChar(50), email)
            .input('regQuestion', sql.VarChar(50), regQuestion)
            .input('regAnswer', sql.VarChar(50), regAnswer)
            .input('accJoinDate', sql.VarChar(25), date)
            .execute(`dbo.RegAccount`)
            const userResponse = await request
            .query('SELECT memb.memb___id AS login, memb.memb__pwd AS password, memb.mail_addr AS email FROM dbo.MEMB_INFO memb WHERE memb.memb___id = @accLogin')
        const userData = userResponse.recordset[0]
        console.log(userData)
        const token = generateJwt(userData.login, userData.password, userData.email)
        // return res.json({message: "Account created!"})
        return res.json(token)
    }

    async regainAccountQuestion(req, res, next) {
        const {login, email} = req.body
        if(!email || !login) {
            return next(ApiError.badRequest("Wrong password or email!"))
        }
        const candidateEmail = await findOneUserEmail(email)
        console.log(candidateEmail.recordset.length);
        if(candidateEmail.recordset.length == 0) {
            return next(ApiError.internal("User with this E-mail not found!"))
        }
        const candidateLogin = await findOneUserLogin(login)
        if(candidateLogin.recordset.length == 0) {
            return next(ApiError.internal("User with this Login not found!"))
        }
        const pool = await poolPromise
        const request = pool.request()
        const accQuestion = await request
            .input('memb___id', sql.VarChar(10), login)
            .input('mail_addr', sql.VarChar(50), email)
            .query(`SELECT fpas_ques as question FROM dbo.MEMB_INFO mi WHERE mi.memb___id = @memb___id AND mi.mail_addr = @mail_addr`)
        const question = accQuestion.recordset[0]
        console.log(question)
        return res.json(question)
    }

    async regainAccountAnswer(req, res, next) {
        // console.log(req.body);
        const {login, email, answer} = req.body
        if(!email || !login || !answer) {
            return next(ApiError.badRequest("Wrong answer!"))
        }
        const candidateEmail = await findOneUserEmail(email)
        console.log(candidateEmail.recordset.length);
        if(candidateEmail.recordset.length == 0) {
            return next(ApiError.internal("User with this E-mail not found!"))
        }
        const candidateLogin = await findOneUserLogin(login)
        if(candidateLogin.recordset.length == 0) {
            return next(ApiError.internal("User with this Login not found!"))
        }
        const candidateQuestionAnswer = await findUserAnswer(answer)
        if(candidateQuestionAnswer.recordset.length == 0){
            return next(ApiError.internal("Wrong answer!"))
        }
        const pool = await poolPromise
        const request = pool.request()
        const accAnswer = await request
            .input('memb___id', sql.VarChar(10), login)
            .input('mail_addr', sql.VarChar(50), email)
            .input('fpas_answ', sql.VarChar(50), answer)
            .query(`SELECT memb__pwd as password FROM dbo.MEMB_INFO mi WHERE mi.memb___id = @memb___id AND mi.mail_addr =@mail_addr AND mi.fpas_answ = @fpas_answ`)
        const regainPassword = accAnswer.recordset[0]
        console.log(regainPassword)
        return res.json(regainPassword)
    }

    async login(req, res, next) {
        const {login, password} = req.body
        console.log(login)
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('memb___id', sql.VarChar(10), login)
        .query('SELECT memb.memb___id AS login, memb.memb__pwd AS password, memb.mail_addr AS email FROM dbo.MEMB_INFO memb WHERE memb.memb___id COLLATE Latin1_General_CS_AS = @memb___id')
        const userData = data.recordset[0]
        console.log(userData)
        if (!userData) {
            return next(ApiError.internal('User with this login not found!'))
        }
        // let comparePassword = await passMD5Check(password, login) 
        let comparePassword = userData.password === password 
        if (!comparePassword) {
            return next(ApiError.forbidden('Wrong password!'))
        }
        const token = generateJwt(userData.login, userData.password, userData.email)
        // const decoded = jwt.verify(token, process.env.SECRET_KEY)
        // console.log(decoded)
        return res.json({token})
    }
    async check(req, res, next) {
        console.log(req.user)
        const token = generateJwt(req.user.login, req.user.password, req.user.email)
        return res.json({token})
    }
        async getAccountCharacters(req, res, next) {
        console.log(req.user);
        const pool = await poolPromise
        const request = pool.request()   
        const data = await request
        .input('id', sql.VarChar(10), req.user.login)
        .query('SELECT name as cName, cLevel, mLevel, class as cClass, str as cStr, agi as cAgi, vit as cVit, ene as cEne, cmd as cCmd, cZen, mapNumber, posX as mapX, posY as mapY, reset as cReset, gReset as cGrandReset, online, charGuild FROM dbo.vwCharacters c WHERE c.id = @id')
        return res.json(data.recordset)
    }
        async getAccountInfo(req, res, next) {
        console.log(req.user);
        const pool = await poolPromise
        const request = pool.request()   
        const data = await request
        .input('id', sql.VarChar(10), req.user.login)
        .query('SELECT * FROM dbo.vwUsers u WHERE u.accName = @id')
        return res.json(data.recordset[0])
    }
    async makeAccountCharacterReset(req, res) {
        const {name} = req.body
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('cName', sql.VarChar(10), name)
        .execute('dbo.Reset_system7')
        return res.json(data.recordset[0].Result)
    }
    async makeAccountCharacterGrandReset(req, res) {
        const {name} = req.body
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('cName', sql.VarChar(10), name)
        .execute('dbo.GrandReset_system1')
        return res.json(data.recordset[0].Result)
    }
    async buyVip(req, res) {
        const {name, days, type} = req.body
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('accName', sql.VarChar(10), name)
        .input('vipDays', sql.Int(), days)
        .input('vipType', sql.SmallInt(), type)
        .execute('dbo.Buy_vip')
        return res.json(data.recordset)
    }
}



module.exports = new UserController()