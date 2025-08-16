import { createSlice } from "@reduxjs/toolkit";

const serverInfo = [
    {title: 'Expirience:', content: {content: '35x', className: 'description_content_p'}},
    {title: 'Clear Stats:', content: {content: 'on', className: 'description_p_on'}},
    {title: 'Remove Items:', content: {content: 'off', className: 'description_p_off'}},
    {title: 'Classes:', content: {content: 'Dark Wizard | Dark Knight | Fairy Elf | Summoner | Magic Gladiator | Dark Lord | Rage Fighter', className: 'description_content_p'}},
    {title: 'Reset:', content: [
        [
            {content: 'DK, DW, Elf, Summ', className: 'description_content_p_res_class'},
            {content: '= 400 free stats', className: 'description_content_p_res_stats'}
        ], 
        [
            {content: 'MG, RF', className: 'description_content_p_res_class'},
            {content: '= 500 free stats', className: 'description_content_p_res_stats'}
        ], 
        [
            {content: 'DL', className: 'description_content_p_res_class'},
            {content: '= 400 free stats + 100 Command', className: 'description_content_p_res_stats'}
        ] 
    ]
    },
    {title: 'Grand Reset:', content: [
        [
            {content: 'DK, DW, Elf, Summ', className: 'description_content_p_res_class'},
            {content: '= 2000 free stats', className: 'description_content_p_res_stats'},
            {content: '+ 30 Master Level skill points', className: 'description_content_p_res_stats_gr'},
        ], 
        [
            {content: 'MG, DL, RF', className: 'description_content_p_res_class'},
            {content: '= 2500 free stats', className: 'description_content_p_res_stats'},
            {content: '+ 30 Master Level skill points', className: 'description_content_p_res_stats_gr'},
        ] 
    ]
},
{title: 'Easy Reset:', content: [
        [
            {content: '1st - 370lvl,', className: 'description_content_p_res_stats_gr'},
            {content: '2nd - 380lvl,', className: 'description_content_p_res_stats_gr'},
            {content: '3rd - 390lvl', className: 'description_content_p_res_stats_gr'},
        ], 
    ]
},
{title: 'Max. Stats:', content: {content: '32000', className: 'description_content_p'}},
{title: 'BC, DS:', content: {content: '150% Exp🔥', className: 'description_content_p'}},
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
