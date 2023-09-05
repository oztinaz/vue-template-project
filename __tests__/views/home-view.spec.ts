import { beforeEach, describe, expect, test } from 'vitest'
import { type VueWrapper, shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('views/HomeView', () => {
    let wrapper: VueWrapper<HomeView>

    beforeEach(() => {
        wrapper = shallowMount(HomeView)
    })
    
    test('displays message', () => {
        const wrapper = shallowMount(HomeView)
        const container = wrapper.get('[data-test="home"]')

        expect(container.text()).toBe('Hello, World!')
    })
})