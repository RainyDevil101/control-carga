const jwt = require('jsonwebtoken');

const generateJWT = ( id = '' ) => {

    
    return new Promise( (resolve, reject) => {
        
        const payload = { id };
        
        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
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