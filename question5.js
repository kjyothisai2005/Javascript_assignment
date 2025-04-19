//question-5
function evaluateConditions(obj) {
    if (obj.age > 18 && obj.hasLicense) return "Eligible to drive";
    if (obj.temperature > 30 || obj.humidity > 70) return "Warning: High discomfort level";
    if ((obj.role === "admin" || obj.role === "editor") && obj.isActive) return "Access granted";
    if (!(obj.isBanned) && obj.loginAttempts < 3) return "Login allowed";
    if (obj.balance <= 0 || !obj.isAccountActive) return "Account issue";
    return "No conditions met";
  }
  obj={name:'Jyothi',age:19,hasLicense:false,
    temperature:38,humidity:72,
    role:'admin',isActive:true,
    isBanned:true,loginAttempts:2,
    balance:0,isAccountActive:false}

console.log(evaluateConditions(obj));