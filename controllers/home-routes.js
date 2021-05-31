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


module.exports = router;