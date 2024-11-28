// import type { HttpContext } from '@adonisjs/core/http'

import Country from '#models/country'

export default class CountriesController {
  async index() {
    return Country.all()
  }
}
