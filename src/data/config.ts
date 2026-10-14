// ⚠️ TROQUE pelo número oficial da loja: DDI + DDD + número, só dígitos (ex.: 5511999998888)
export const WHATSAPP_NUMBER = '5511900000000'
// ⚠️ TROQUE pelo Instagram oficial
export const INSTAGRAM_URL = 'https://www.instagram.com/'

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
