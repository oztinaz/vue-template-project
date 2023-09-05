import { beforeEach, describe, expect, test } from 'vitest'
import { DOMWrapper, VueWrapper, shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('components/ButtonField', () => {
    let wrapper: VueWrapper<Button>
    let button: Omit<DOMWrapper<Element>, 'exists'>

    beforeEach(() => {
        wrapper = shallowMount(Button, {
            props: {
                type: 'submit',
                label: 'testLogin',
                disabled: false
            }
        })
        button = wrapper.get('[data-test="button-field"]')
    })

    test('displays label', () => {
        expect(button.text()).toBe('testLogin')
    })

    test('disabled when passed true', async () => {
        await wrapper.setProps({
            disabled: true
        })
        
        expect(button.attributes('disabled')).toBeDefined()
    })
})