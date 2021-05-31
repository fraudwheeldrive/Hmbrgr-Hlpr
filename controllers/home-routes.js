const router = require( 'express' ).Router();
router.get( '/', (req, res ) => {
    res.render( 'homepage' )
} );
router.get( '/contact', (req, res ) => {
    res.render( 'contact' )
} );
router.get( '/location', (req, res ) => {
    res.render( 'locations' )
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
module.exports = router;