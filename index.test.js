const utils = require('./index')

describe('[Görev 1] nesneyiTrimle', () => {
  test('[1] propları trimlenmiş bir nesne döndürüyor',async () => {
    // ÖRNEK
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = await utils.nesneyiTrimle(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 2] verileniTrimle', () => {
  // test('[3] verilen propu trimliyor', () => {})
  test("[3] verilen propu trimliyor",async ()=>{
    const input={ isim: '  jane  ' , yas: ' 34 '}
    const input2="isim"
    const expected= { isim: 'jane', yas: ' 34 '}
    const actual=await utils.verileniTrimle(input,input2)
    expect(actual).toEqual(expected)
  })
  // test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {})
  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor",async ()=>{
    const input={ isim: '  jane  ' , yas: ' 34 '}
    const input2="isim"
    const expected= { isim: 'jane', yas: ' 34 '}
    const actual=await utils.verileniTrimle(input,input2)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 3] enBuyukTamsayiyiBul', () => {
  // test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }', () => {})
  test("[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor",async ()=>{
    const input=[{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]
    const expected= 3
    const actual=await utils.enBuyukTamsayiyiBul(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 4] Sayici', () => {
  let sayici
  beforeEach(() => {
    sayici = new utils.Sayici(3) // her test yeni bir sayı ile başlatılıyor
  })
  // test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {})
  test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {
    sayici.asagiSay()
    expect(sayici).toHaveProperty("ilkSayi",3)
  })
  // test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {})
  test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {
    sayici.asagiSay()
    sayici.asagiSay()
    expect(sayici).toHaveProperty("ilkSayi",2)
  })
  // test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {})
  test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {
    sayici.asagiSay()
    sayici.asagiSay()
    sayici.asagiSay()
    sayici.asagiSay()
    sayici.asagiSay()
    expect(sayici).toHaveProperty("ilkSayi",0)
  })
})

describe('[Görev 5] Mevsimler', () => {
  let mevsimler
  beforeEach(() => {
    mevsimler = new utils.Mevsimler() // her test yeni bir mevsimle başlar
  })
  // test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {})
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    expect(mevsimler.sonraki()).toEqual("yaz")
  })
  // test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {})
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    expect(mevsimler.sonraki(2)).toEqual("sonbahar")
  })
  // test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {})
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    expect(mevsimler.sonraki(3)).toEqual("kış")
  })
  // test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {})
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    expect(mevsimler.sonraki(4)).toEqual("ilkbahar")
  })
  // test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {})
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    expect(mevsimler.sonraki(5)).toEqual("yaz")
  })
  // test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {})
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    expect(mevsimler.sonraki(40)).toEqual("ilkbahar")
  })
})

describe('[Görev 6] Araba', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Araba('focus', 20, 30) // her test yeni bir araba oluşturur
  })
  // test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {})
  test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {
    expect(focus.sur(100)).toHaveProperty("odometer",100)
  })
  // test('[16] arabayı sürmek benzin tüketiyor', () => {})
  test('[16] arabayı sürmek benzin tüketiyor', () => {
    expect(focus.sur(100)).toHaveProperty("depo",20-100/30)
  })
  // test('[17] benzinalma arabayı sürmeye izin veriyor', () => {})
  test('[17] benzinalma arabayı sürmeye izin veriyor', () => {
    expect(focus.sur(600)).toHaveProperty("maxGidilecekYol",0)
  })
  // test('[18] dolu depoya benzin alma etki etmiyor', () => {})
  test('[18] dolu depoya benzin alma etki etmiyor', () => {
    expect(focus.benzinal(10)).toEqual(600)
  })
})

describe('[Görev 7] asenkronCiftSayi', () => {
  // test('[19] bir çift sayı verilirse true çözümlüyor', () => {})
  test('[19] bir çift sayı verilirse true çözümlüyor',async () => {
    const input=2
    const actual=await utils.asenkronCiftSayi(input)
    expect(actual).toEqual(true)
  })
  // test('[20] tek sayı verilirse false çözümlüyor', () => {})
  test('[20] tek sayı verilirse false çözümlüyor',async () => {
    const input=3
    const actual=await utils.asenkronCiftSayi(input)
    expect(actual).toEqual(false)
  })

})
