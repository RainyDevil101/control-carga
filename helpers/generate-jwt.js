const jwt = require('jsonwebtoken');

const generateJWT = ( id = '' ) => {

    
    return new Promise( (resolve, reject) => {
        
        const payload = { id };
        
        jwt.sign( payload, "TH1ZSA4S5CKRET1PRVBITHAKE123KSDAZASDSADI", {
            expiresIn: '1hr'
        }, (err, token) => {
            if (err) {
                reject('No se pudo generar el token')
            } else {
                resolve( token );
            }
        })
        
        
    
    });

}

module.exports = {
    generateJWT
}