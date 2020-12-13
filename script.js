const com = document.querySelectorAll(".com");


for(button in com) {
    com[button].onclick = function() {
        com.forEach(function(btn) {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    }

}
