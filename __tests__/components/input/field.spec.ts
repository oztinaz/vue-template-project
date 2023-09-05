import { beforeEach, describe, expect, test } from 'vitest'
import { DOMWrapper, VueWrapper, shallowMount } from '@vue/test-utils'
import Input from '@/components/input/Field.vue'

describe('components/input/Field', () => {
    let wrapper: VueWrapper<Input>
    let input: Omit<DOMWrapper<Element>, 'exists'>

    beforeEach(() => {
        wrapper = shallowMount(Input, {
            props: {
                id: 'testId',
                type: 'testType',
                placeholder: 'testPlaceholder',
                hasErrors: false
            }
        })
        input = wrapper.get('[data-test="field"]')
    })

    test('sets value when input given', async () => {
        const value = 'a'
        await input.setValue(value)
        expect(wrapper.vm.value).toBe(value)
    })

    test('has red borders when has errors', async () => {
        await wrapper.setProps({
            hasErrors: true
        })
        expect(input.classes()).toStrictEqual(['border-[1px]', 'border-zinc-200', 'rounded-md', 'w-full', 'px-2', 'py-1', 'shadow-lg', 'border-2', 'border-red-300'])
    })
})