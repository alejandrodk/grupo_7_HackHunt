module.exports = {
    infoPersonal : (obj,id) => {
        let info = {
            user_id : id,
            user_dni : obj.user_dni,
            user_datebirth : obj.user_datebirth,
            user_gender : obj.user_gender,
            user_civilstate : obj.user_civilstate,
            user_phone : obj.user_phone,
            user_city : obj.user_city,
            user_position : obj.user_position,
            user_position_level : obj.user_position_level,
            user_position_description : obj.user_position_description,
            user_git : obj.user_git,
            user_website : obj.user_website,
            user_stack : obj.user_stack,
            user_lang : obj.user_lang,
            user_lang_level : obj.user_lang_level,
            user_work_sit : obj.user_work_sit,
            user_work_wish : obj.user_work_wish,
            user_wish_area : obj.user_wish_area,
            user_salary : obj.user_salary,
            user_work_location : obj.user_work_location
        }
        return info
    },
    infoLaboral : (obj,id) => {
        let info = {
            user_id : id,
            user_cmp_experience : obj.user_cmp_experience,
            user_cmp_position : obj.user_cmp_position,
            user_experience_since : obj.user_experience_since,
            user_experience_to : obj.user_experience_to,
            user_experience_description : obj.user_experience_description
        }
        return info
    },
    infoEducacion : (obj,id) => {
        let info = {
            user_id : id,
            user_career : obj.user_career,
            user_institution : obj.user_institution,
            user_career_title : obj.user_career_title,
            user_career_since : obj.user_career_since,
            user_career_to : obj.user_career_to,
            user_career_description : obj.user_career_description
        }
        return info
    }
}