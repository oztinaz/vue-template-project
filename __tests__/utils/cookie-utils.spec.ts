import { beforeEach, describe, expect, test } from 'vitest'
import CookieUtils from '@/utils/CookieUtils'

describe('utils/CookieUtils', () => {

    beforeEach(() => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: 'key1=value1; key2=value2'
        })
    })

    test('all returns empty object when document.cookie gives an empty string', () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: ''
        })
        const cookies = CookieUtils.all()
        expect(cookies).toStrictEqual({})
    })

    test('all returns all cookies as object key value pairs', () => {
        const cookies = CookieUtils.all()
        expect(cookies).toStrictEqual({key1: 'value1', key2: 'value2'})
    })

    test('get returns undefined when an invalid key given', () => {
        const cookie = CookieUtils.get('key3')
        expect(cookie).toBeUndefined()
    })

    test('get returns value when a valid key given', () => {
        const cookie = CookieUtils.get('key1')
        expect(cookie).toBe('value1')
    })

    test('set upserts the cookie given', () => {
        CookieUtils.set('key1', 'new1')
        const result = CookieUtils.get('key1')
        expect(result).toBe('new1')
    })

    test('set adds expiration  the cookie given', () => {
        const date = new Date()
        CookieUtils.set('key1', 'new1', date)
        expect(window.document.cookie).toBe(`key1=new1; expires=${date.toUTCString()}`)
    })
})