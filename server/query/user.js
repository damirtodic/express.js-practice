const express = require("express");
const db = require("../db");

function fetchById(id){

}

function fetchUsers(){
   return db.execute("SELECT * FROM users").then(([rows,field])=>{
        const username = rows.map(rows => rows.username);
        return username;
    }).catch((err)=>{return err});
}

function userLogIn(username,password){
    return db.execute('SELECT id FROM users WHERE username=? AND password=?',[username,password]).then(
        ([rows,field])=>{
            console.log(rows);
            return rows;
        }
    ).catch(err=>{
        console.log(err);
    })
}

function updateUserById(id,username, password){
    db.execute('UPDATE users SET username=?, password=? WHERE id=?',[username,password,id]).then(
        console.log("user with id:"+id+ "updated to username:"+username +"and password to:"+password)
    ).catch(err=>{
        console.log(err);
    })
}

function deleteUserById(id){
    db.execute('DELETE FROM users WHERE id=?',[id]).then((res)=>{
        console.log(res)
        console.log("deleted user with id: "+id);
    }
    ).catch(err=>{
        console.log(err)
    })
}

function registerUser(username,password){
    db.execute("INSERT INTO users (username,password) VALUES(?,?)",[username,password]).then(
        res=>{
            console.log("successfuly registered username: "+username+", password: "+password);
        }
    ).catch(err=>{
        console.log(err);
    })
}

module.exports = {
    fetchUsers : fetchUsers,
    userLogIn : userLogIn,
    updateUserById : updateUserById,
    deleteUserById:deleteUserById,
    registerUser:registerUser
}