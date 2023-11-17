$(document).ready(function () {
  vtexjs.checkout.getOrderForm().done(function (orderForm) {

    // createShippingStripe();
    // ShippingStripeProgress(orderForm);
    insertTagPayments()

    $(window).on('orderFormUpdated.vtex', function (evt, orderForm) {
      // ShippingStripeProgress(orderForm);
      insertTagPayments()

    })

    $(window).on('hashchange', () => {
      insertTagPayments()
    })
  })
})

function createShippingStripe() {
  const ShippingSection = $('<section/>', { class: 'rewards-progress' })
  const ShippingDiv = $('<div/>', { class: 'rewards-progress-text' })
  const ShippingParagraph = $('<p/>', { class: 'receive-text' })
  const ShippingDiv1 = $('<div/>', { class: 'rewards-progress-fill__bg' })
  const ShippingDiv2 = $('<div/>', { class: 'rewards-progress-fill' })

  var appendStripe
  if (window.innerWidth <= 1024) {
    appendStripe = ShippingSection.insertBefore('.summary-template-holder')
  } else {
    appendStripe = ShippingSection.prependTo('.summary-template-holder')

  }

  const appendStripe1 = ShippingDiv.appendTo('.rewards-progress')
  const appendStripe3 = ShippingParagraph.appendTo('.rewards-progress-text')
  const appendStripe4 = ShippingDiv1.appendTo('.rewards-progress')

  const appendStripe7 = ShippingDiv2.appendTo('.rewards-progress-fill__bg')

  const appendStripe6 = $('.receive-text').html('Você ganhou frete grátis')
  appendStripe
  appendStripe1
  appendStripe3
  appendStripe4
  appendStripe6
  appendStripe7
}

function ShippingStripeProgress(orderForm) {
  // console.log(orderForm)

  var valorFreteGratis = 100000
  var valorDesconto = 100000 //O valor do frete a ser batido para ser gratis
  var descontoOcasional = 0

  var alteraValor = false // se true descontoOcasional = new value

  var now = new Date() //aqui momento atual
  var start = new Date('2022-04-29 00:01') //aqui momento inicial do desconto
  var end = new Date('2025-04-30 00:01') //aqui momento final do desconto

  var conditionForDiscount = now.getTime() >= start.getTime() && now.getTime() <= end.getTime() //condição se o momento atual estiver entre "start" e "end"

  if (conditionForDiscount) {
    valorFreteGratis = valorDesconto
    if (alteraValor) {
      // se estiver true, aplica valor de desconto para var abaixo.
      valorFreteGratis = descontoOcasional
    }
  } else {
    $('.rewards-progress').css('display', 'none')
  }

  var priceItems = orderForm.totalizers
  if (priceItems) {
    priceItems = priceItems.find((element) => element.id == 'Items')
  }

  var discounts = orderForm.totalizers
  if (discounts) {
    discounts = discounts.find((element) => element.id == 'Discounts')
  }

  var valorDiscounts = 0
  var valorItems = 0

  if (discounts) {
    var valorDiscounts = discounts.value
  }

  if (priceItems) {
    valorItems = priceItems.value

    if (valorItems) {

      var valorDiscountsFormatted = Math.abs(valorDiscounts)
      var freteGratis = valorItems - valorDiscountsFormatted
      var valorParaDesconto = valorFreteGratis - freteGratis

      var porcentagemDiferenca = (valorParaDesconto / valorFreteGratis) * 100
      porcentagemDiferenca = 100 - porcentagemDiferenca
      var valorParaDescontoFinal = valorParaDesconto / 100
      var valorParaDescontoFinalFormated = valorParaDescontoFinal.toFixed(2).replace('.', ',')
      let boldValue = `<span>R$ ${valorParaDescontoFinalFormated}</span>`


      if (valorParaDescontoFinal > 0 && valorParaDescontoFinal < valorFreteGratis) {
        $('.receive-text').html(`Faltam  ${boldValue}  para Frete Grátis`)

        $('.rewards-progress-fill').css(
          'transform',
          'translateX(' + porcentagemDiferenca + '%)',
          'transition',
          'transform 300ms ease-in-out'
        )
      } else if (valorParaDescontoFinal < 0) {
        $('.receive-text').html('Parabéns! O frete é por nossa conta!')
        $('.rewards-progress-fill').css('transform', 'translateX(100%)')
      }
    }
  } else {
    $('.receive-text').html(`Faltam  ${boldValue}  para frete grátis`)
    $('.rewards-progress-fill').css('transform', 'translateX(0%)')
  }
}

function insertTagPayments() {
  if (!document.querySelector(".wec-payment-text-method")) {
    const Pix = document.querySelector('.payment-group-item[data-name="Pix"]');

    const pixText = document.createElement('span');
    pixText.innerHTML = '10% OFF no PIX';
    pixText.classList.add('wec-payment-text-method');

    Pix ? Pix.append(pixText) : ''

    const Boleto = document.querySelector('.payment-group-item[data-name="Boleto Bancário"]');

    const boletoText = document.createElement('span');
    boletoText.innerHTML = '10% OFF no Boleto';
    boletoText.classList.add('wec-payment-text-method');

    Boleto ? Boleto.append(boletoText) : ''
  }
}