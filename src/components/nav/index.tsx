import { defineComponent, onMounted, render } from 'vue'
import { MenuOptionItem } from '@/type/index'
import { SlotsType } from 'vue'
import './index.scss'

Object as SlotsType<{
  default: { foo: string; bar: number }
  item: { data: number }
}>

export default defineComponent({
  name: 'Navigator',
  props: {
    activeKey: { type: String, default: 'flowing' },
    menu: { type: Array<MenuOptionItem> }
  },
  slots: Object as SlotsType<{
    default: { foo: string; bar: number }
    footer: { name: string }
  }>,
  emits: ['set-active-key'],
  setup(props, { emit, slots }) {
    console.log('props', props.activeKey)
    const { activeKey, menu } = props
    let i = 0
    const onChange = (i: number) => {
      return i + 1
    }
    i = onChange(i)
    setTimeout(() => {
      emit('set-active-key', 'test')
    }, 5000)

    const label = <div>1111</div>

    onMounted(() => {
    })
    return () => (
      <div class='nav-body'>
        {menu?.map(v => {
          return <div class="nav-item">
            {v.icon}
            {label}
            <div class="label">{ v.label }</div>
          </div>
        })}
      </div>
    )
  },
  mounted() {
    console.log(this.activeKey)
  }
})
