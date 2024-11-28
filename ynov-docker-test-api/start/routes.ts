/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const CountriesController = () => import('#controllers/countries_controller')
import router from '@adonisjs/core/services/router'

router.get('/countries', [CountriesController, 'index'])
router.get('/', async () => {
  return 'It works!'
})
