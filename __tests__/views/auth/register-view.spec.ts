import { beforeEach, describe, expect, test } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import RegisterView from '@/views/auth/RegisterView.vue'

describe('views/auth/RegisterView', () => {
    let wrapper: VueWrapper<RegisterView>

    beforeEach(() => {
        wrapper = shallowMount(RegisterView)
    })

    test('setName sets name', () => {
        const name = 'testName'
        wrapper.vm.setName(name)
        expect(wrapper.vm.name).toBe(name)
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

    test('setPasswordConfirmation sets passwordConfirmation', () => {
        const passwordConfirmation = 'testPasswordConfirmation'
        wrapper.vm.setPasswordConfirmation(passwordConfirmation)
        expect(wrapper.vm.passwordConfirmation).toBe(passwordConfirmation)
    })
})