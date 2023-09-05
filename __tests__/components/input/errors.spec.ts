import { beforeEach, describe, expect, test } from 'vitest'
import { DOMWrapper, VueWrapper, shallowMount } from '@vue/test-utils'
import Errors from '@/components/input/Errors.vue'

describe('components/input/Errors', () => {
    const errors = [
        'error 1',
        'error 2'
    ]
    let wrapper: VueWrapper<Errors>
    let input: Omit<DOMWrapper<Element>, 'exists'>

    beforeEach(() => {
        wrapper = shallowMount(Errors, {
            props: {
                errors: errors
            }
        })
        input = wrapper.get('[data-test="input-field"]')
    })
    
    test('displays error messages from props', () => {
        const lis = wrapper.findAll('li')
        lis.forEach((li: DOMWrapper<HTMLLIElement>, index: number) => {
            expect(li.text()).toBe(errors[index])
        })
    })
})