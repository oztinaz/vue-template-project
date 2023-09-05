import { beforeEach, describe, expect, test } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import LoginView from '@/views/auth/LoginView.vue'

describe('views/auth/LoginView', () => {
    let wrapper: VueWrapper<LoginView>

    beforeEach(() => {
        wrapper = shallowMount(LoginView)
    })

    test('setEmail sets email', () => {
        const email = 'testEmail'
        wrapper.vm.setEmail(email)
        expect(wrapper.vm.email).toBe(email)
    })

    test('setPassword sets password', () => {
        const password = 'testPassword'
        wrapper.vm.setPassword(password)
        expect(wrapper.vm.password).toBe(password)
    })
})