const { createApp } = Vue

createApp({
    data() {
        return {
            linksName: [
                'Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop',
            ],

            addressFooter: [
                '982 NE 191st sT # 87394 Miami, FL 33179-3899',
                '1+(305) 5747-9909 (9am -5pn EST, Monday - Friday)',
                'support@maxchoach.com',
            ],
            ExploreFooter: [
                'Start Here',
                'Blog',
                'About Us',
            ],
            otherExploreFooter: [
                'Success story',
                'Couses',
                'Contact Us',
            ],
            informationFooter: [
                'Membership',
                'Purchase Guide',
                'Privacy policy',
                'Terms of Services',
            ],
        }
    },


}).mount('#app');