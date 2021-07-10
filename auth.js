const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


function init (passport){
    const authUser = (email,password,done) =>{
        const user = GetUserByEmail(email);
        if(user == null){
            return done(null,false,{massage: 'user not found'});
        }

        try {
            if(await bcrypt.compare(password,user.password)){
                return done(null,user)
            }else{
                return done(null,false,{message: 'wrong password'})
            }
        } catch (e){
            return done(e)
        }
    }




    passport.use(new LocalStrategy({usernameField: 'email'}),authUser)
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => done(null, user.id))
}



module.exports = init;