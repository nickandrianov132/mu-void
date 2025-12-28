import { createSlice } from "@reduxjs/toolkit";

const serverInfo = [
    {title: 'Experience:', content: {content: 'Dinamic 100x -> 50x', className: 'description_content_p'}},
    {title: 'Clear Stats:', content: {content: 'on', className: 'description_p_on'}},
    {title: 'Off-leveling:', content: {content: 'on', className: 'description_p_on'}},
    {title: 'Remove Items:', content: {content: 'off', className: 'description_p_off'}},
    {title: 'Windows per PC:', content: {content: '5', className: 'description_content_p'}},
    {title: 'Classes:', content: {content: 'Dark Wizard | Dark Knight | Elf | Summoner | Magic Gladiator | Dark Lord | Rage Fighter', className: 'description_content_p'}},
    {title: 'Reset:', content: [
        [
            {content: 'DK, DW, Elf, Summ', className: 'description_content_p_res_class'},
            {content: '= 500 free stats', className: 'description_content_p_res_stats'}
        ], 
        [
            {content: 'MG, RF', className: 'description_content_p_res_class'},
            {content: '= 650 free stats', className: 'description_content_p_res_stats'}
        ], 
        [
            {content: 'DL', className: 'description_content_p_res_class'},
            {content: '= 500 free stats + 150 Command', className: 'description_content_p_res_stats'}
        ] 
    ]
    },
    {title: 'Grand Reset:', content: [
        [
            {content: 'DK, DW, Elf, Summ', className: 'description_content_p_res_class'},
            {content: '= 5000 free stats', className: 'description_content_p_res_stats'},
            {content: '+ 50 Master skill points + 300 WCoins', className: 'description_content_p_res_stats_gr'},
        ], 
        [
            {content: 'MG, RF', className: 'description_content_p_res_class'},
            {content: '= 6500 free stats', className: 'description_content_p_res_stats'},
            {content: '+ 50 Master skill points + 300 WCoins', className: 'description_content_p_res_stats_gr'},
        ], 
        [
            {content: 'DL', className: 'description_content_p_res_class'},
            {content: '= 5000 free stats + 1500 Command', className: 'description_content_p_res_stats'},
            {content: '+ 50 Master skill points + 300 WCoins', className: 'description_content_p_res_stats_gr'},
        ] 
    ]
},
{title: 'Easy Reset:', content: [
        [
            {content: '1st - 350lvl,', className: 'description_content_p_res_stats_gr'},
            {content: '2nd - 360lvl,', className: 'description_content_p_res_stats_gr'},
            {content: '3rd - 370lvl', className: 'description_content_p_res_stats_gr'},
            {content: '4th - 380lvl', className: 'description_content_p_res_stats_gr'},
            {content: '5th - 390lvl', className: 'description_content_p_res_stats_gr'},
        ], 
    ]
},
{title: 'Max. Stats:', content: {content: '32000', className: 'description_content_p'}},
{title: 'BC, DS:', content: {content: '200% Exp🔥', className: 'description_content_p'}},
{title: 'Hot-Exp:', content: {content: 'Exp + 50% Drop + 10% Monday to Friday from 18:00 to 22:00', className: 'description_content_p'}},
{title: 'Weekend Hot-Exp:', content: {content: 'Exp + 50% Drop +10% from Saturday 24:00 to Sunday 24:00', className: 'description_content_p'}},
{title: 'Offexp:', content: {content: '/offlevel  with pick up jewels🔥', className: 'description_content_p'}},
{title: 'Setparty:', content: {content: '/setparty  and your party password', className: 'description_content_p'}},
]

const serverInfoSlice = createSlice({
    name: 'serverInfo',
    initialState: serverInfo,
    reducers: {
        addServerInfo(state, action) {
            return state.push(action.payload)
        }
    }
})

export const { addServerInfo } = serverInfoSlice.actions
export default serverInfoSlice.reducer
