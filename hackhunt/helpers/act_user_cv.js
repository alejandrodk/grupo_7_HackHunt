const db = require('../database/models');

module.exports = {
    actualizarCv : (form,info,id) => {
        if(form == 'personal'){
            db.cliente_cv.update({
                user_phone : info.user_phone,
                user_city : info.user_city
            },{
                where : {
                    user_id : id
                }
            })
            return '#DatosPersonales';
        }
        if(form == 'profesional'){
            db.cliente_cv.update({
                ...info
            },{
                where : {
                    user_id : id
                }
            })
            return '#DatosProfesionales';
        }
        if(form == 'laboral'){
            db.cliente_experience.update({
                ...info
            },{
                where : {
                    user_id : id
                }
            })
            return '#ExperienciaLaboral';
        }
        if(form == 'formacion'){
            db.cliente_education.update({
                user_career : info.user_career,
                user_institution : info.user_institution,
                user_career_title : info.user_career_title,
                user_career_since : info.user_career_since,
                user_career_to : info.user_career_to,
                user_career_description : info.user_career_description
            },{
                where : {
                    user_id : id
                }
            })
            db.cliente_cv.update({
                user_git : info.user_git,
                user_website : info.user_website,
                user_stack : info.user_stack
            },{
                where : {
                    user_id : id
                }
            })
            return '#Formacion';
        }
        if(form == 'lang'){
            db.cliente_cv.update({
                ...info
            },{
                where : {
                    user_id : id
                }
            })
            return '#Idiomas';
        }
        if(form == 'pref'){
            db.cliente_cv.update({
                ...info
            },{
                where : {
                    user_id : id
                }
            })
            return '#PreferenciaLaboral'; 
        }
        if(form == 'skills'){
            db.user_skill.create({
                user_id : id,
                skill_id : info.skill_id
            })
            return '#Skills';
        } 

    }
}