function calculate(basketAmount, numberOfProducts, promocode = null){
    let totalAmount = basketAmount
  
    if (promocode == 'ДАРИМ300' && basketAmount < 300){
      totalAmount = 0;
      console.log("ДАРИМ300 " + totalAmount)
    } 
    else if (promocode =='ДАРИМ300'){
      totalAmount = totalAmount - 300
      console.log('ДАРИМ300 ' + totalAmount)
    }
    
    if (numberOfProducts >= 10){
      const FiveProcent = basketAmount/100*5
      totalAmount = totalAmount - FiveProcent
      console.log("У вас больше 10 товаров в корзине. Значит применяется скидка равная 5%. Итоговая сумма корзины = " + totalAmount)
    }
    
    if (basketAmount > 50000){
      const TwentyProcent = totalAmount/100*20
      const Difference = totalAmount - 50000
      totalAmount = Difference - TwentyProcent
      console.log("Стоимость вашей корзины больше 50 000 рублей. Была применена скидка равная 20%. Итоговая сумма корзины = " + totalAmount)
    }
    
    if (promocode == 'СКИДКА15' && basketAmount >= 20000){
      const FifteenProcent = totalAmount/100*15
      totalAmount = totalAmount - FifteenProcent
      console.log("Вы ввели промокд СКИДКА15. Вы получаете скидку равную 15%. Итоговая сумма корзины = " + totalAmount)
    }
    console.log("Стоимость корзины равна " + totalAmount)
  }
  
  calculate(10000, 5, 'ДАРИМ300')
