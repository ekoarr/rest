import * as passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';
// const LocalStrategy = require('passport-local').Strategy;
const options = {};
passport.serializeUser((user:any, done:any) => { done(null, user.id); });
passport.deserializeUser((id, done) => {
  if(id='test') done(null, {name:'edward', password: 'test123'});
});

passport.use(new LocalStrategy(options, (username, password, done)=>{
    const user = {name:'edward', password: 'test123'};
    password = 'test123';
   if(!user) return done(null, false);
   if(password === user.password){
     return done(null, user);
   }else{
     return done(null,false);
   }
}));

export {
  passport
};