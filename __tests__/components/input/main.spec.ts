import { beforeEach, describe, expect, test, vi } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import Main from '@/components/input/Main.vue'
import Errors from '@/components/input/Errors.vue'

describe('components/input/Main', () => {
    let wrapper: VueWrapper<Main>
    const setter = vi.fn()

    beforeEach(() => {
        wrapper = shallowMount(Main, {
            props: {
                id: 'testId',
                type: 'testType',
                placeholder: 'testPlaceholder',
                errors: [],
                setter: setter
            }
        })
    })

    test('hasErrors is true when prop errors length is greater than 0', async () => {
        await wrapper.setProps({
            errors: [
                'error'
            ]
        })
        expect(wrapper.vm.hasErrors).toBe(true)
    })

    test('hasErrors is false when prop errors length is less than or equal to 0', async () => {
        await wrapper.setProps({
            errors: []
        })
        expect(wrapper.vm.hasErrors).toBe(false)
    })

    test('displays Errors component when hasErrors is true', async () => {
        await wrapper.setProps({
            errors: [
                'error'
            ]
        })
        const errorsComponent = wrapper.findComponent(Errors)
        expect(errorsComponent.exists()).toBe(true)
    })

    test('does not display Errors component when hasErrors is false', async () => {
        await wrapper.setProps({
            errors: []
        })
        const errorsComponent = wrapper.findComponent(Errors)
        expect(errorsComponent.exists()).toBe(false)
    })

    test('setter calls prop setter', async () => {
        const input = 'testInput'
        await wrapper.vm.setter(input)
        expect(setter).toHaveBeenCalledOnce()
        expect(setter).toHaveBeenCalledWith(input)
    })
})