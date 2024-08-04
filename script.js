document.querySelector('.cross').style.display = 'none';
document.querySelector('.humberger').addEventListener('click', () =>{
    document.querySelector('.sidebar').classList.toggle('sidebar-Go')
if( document.querySelector('.sidebar').classList.contains('sidebar-Go')){
    document.querySelector('.tick').style.display = 'inline';
    document.querySelector('.cross').style.display = 'none';
}
else{
    document.querySelector('.tick').style.display = 'none';
    setTimeout(() =>{
        document.querySelector('.cross').style.display = 'inline';
    }, 300);
}
});
