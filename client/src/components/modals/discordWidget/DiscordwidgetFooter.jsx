
const DiscordwidgetFooter = ({discordName, inviteLink}) => {
    return (
        <div className="discord_footer">
            <span className="discord_name_span">💥{discordName}💥</span>
            <a className="discord_join_btn" href={inviteLink} target="_blank">Join!</a>
        </div>
    );
}

export default DiscordwidgetFooter;
