import { beforeEach, describe, expect, test, vi } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import AuthCard from '@/components/AuthCard.vue'

describe('components/AuthCard', () => {
    let wrapper: VueWrapper<AuthCard>

    beforeEach(() => {
        wrapper = shallowMount(AuthCard, {
            props: {
                submit: (): void => {},
                fields: [{id: 'testId', type: 'testType', placeholder: 'testPlaceholder', errors: [], setInput: (input: any): void => {}}],
                buttonLabel: 'testButtonLabel',
                title: 'testTitle'
            }
        })
    })

    test('displays title as passed to props', () => {
        const container = wrapper.get('[data-test="auth-card-title"]')
        expect(container.text()).toBe('testTitle')
    })

    test('checks submit function', () => {
        const propsSubmit = vi.spyOn(wrapper.props(), 'submit')
        wrapper.vm.submit(new Event(''))
        expect(propsSubmit).toHaveBeenCalledOnce()
    })

    test('disabled returns true when has errors', async () => {
        const fields = [{id: 'testId', type: 'testType', placeholder: 'testPlaceholder', errors: ['a'], setInput: (input: any): void => {}}]
        await wrapper.setProps({
            fields: fields
        })
        expect(wrapper.vm.disabled).toBe(true)
    })

    test('disabled returns false when has no error', async () => {
        const fields = [{id: 'testId', type: 'testType', placeholder: 'testPlaceholder', errors: [], setInput: (input: any): void => {}}]
        await wrapper.setProps({
            fields: fields
        })
        expect(wrapper.vm.disabled).toBe(false)
    })
})