import CryptoJS from 'crypto-js'
// TODO(rushui 2021-04-17): .env
const secretKey = 'aFF23abe9Dca11ebb1fd'

export const encrypt = (message: string | Object) => {
  message = typeof message === 'string' ? message : JSON.stringify(message)
  return CryptoJS.AES.encrypt(message as string, secretKey, {}).toString()
}

export const decrypt = (text: string, parse: boolean = false) => {
  const message = CryptoJS.AES.decrypt(text, secretKey, {}).toString(
    CryptoJS.enc.Utf8
  )
  return parse ? JSON.parse(message) : message
}
