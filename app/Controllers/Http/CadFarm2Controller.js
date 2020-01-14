'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cadfarm2S
 */
class CadFarm2Controller {
  /**
   * Show a list of all cadfarm2S.
   * GET cadfarm2S
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return { greeting: 'teste hello word in JSON'}
  }

  /**
   * Render a form to be used for creating a new cadfarm2.
   * GET cadfarm2S/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new cadfarm2.
   * POST cadfarm2S
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {titulo, corpo}=request.all()
    response.send({mensagem: 'retorno do store:' + params.id + 'titulo: ' + titulo + 'corpo: ' + corpo})
  }

  /**
   * Display a single cadfarm2.
   * GET cadfarm2S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    response.send({mensagem: 'retorno do show:' + params.id})
  }

  /**
   * Render a form to update an existing cadfarm2.
   * GET cadfarm2S/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    response.send({mensagem: 'retorno do put:' + params.id})
  }

  /**
   * Update cadfarm2 details.
   * PUT or PATCH cadfarm2S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    response.send({mensagem: 'retorno do put:' + params.id})
  }

  /**
   * Delete a cadfarm2 with id.
   * DELETE cadfarm2S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    response.send({mensagem: 'retorno do delete:' + params.id})
  }
}

module.exports = CadFarm2Controller
