var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/gryder8/Portfolio-Website.git', // Update to point to your repository
        user: {
            name: 'Gavin Ryder', // update to use your name
            email: 'gavin.ryder82@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)