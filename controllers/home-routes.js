const router = require( 'express' ).Router();
router.get( '/', (req, res ) => {
    res.render( 'homepage' )
} );
router.get( '/contact', (req, res ) => {
    res.render( 'contact' )
} );
router.get( '/restaurants', (req, res ) => {
    res.render( 'restaurants' )
} );
router.get( '/menu', (req, res ) => {
    res.render( 'menu' )
} );
router.get( '/login', (req, res ) => {
    res.render( 'login' )
} );

router.get('/newaccount', (req, res) => {
    res.render('newaccount');
});

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
        }

        res.render('login');
});

module.exports = router;