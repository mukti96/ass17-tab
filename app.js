const tab_menu = document.querySelectorAll('.mm-tab .tab-menu ul a');
const tab_pane_all = document.querySelectorAll('.mm-tab .tab-pane');

tab_menu.forEach(item => {

    item.addEventListener('click', function(e){
        e.preventDefault();
        
        tab_menu.forEach(item => {
            item.classList.remove('active');
        });

        item.classList.add('active');

        const tab_pane = document.querySelector(this.getAttribute('href'));
        tab_pane_all.forEach(item => {
            item.classList.remove('active');
        });
        tab_pane.classList.add('active');
    });

   
});


// wordpress dashboard
const wp_tab_menu = document.querySelectorAll('.wp-tab .wp-tab-menu ul li a' );
const wp_tab_pane_all = document.querySelectorAll('.wp-tab-body .wp-tab-pane' );

wp_tab_menu.forEach(item => {

    item.addEventListener('click', function(e){
        e.preventDefault();

        wp_tab_menu.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');


        const wp_tab_pane = document.querySelector(this.getAttribute('href'));
        wp_tab_pane_all.forEach(item => {
            item.classList.remove('active');
        });
        wp_tab_pane.classList.add('active');

    });

    
});




