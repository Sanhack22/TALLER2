f = ["ab", "cd", "ef", "gh"]

for (let index = 0; index < f.length; index++) {
 if (f[index]=='cd'||f[index]=='gh') {
    console.log(f[index]);
 }
}

for (let index = 0; index < f.length; index++) {
 if (index==1||index==3) {
    console.log(f[index]);
 }
}