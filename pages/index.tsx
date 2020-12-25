import PropsExample from '@/components/examples/PropsExample'

export default function Home() {
  return (
    <div>
      Hello next.js
      <PropsExample onClick={() => alert('click click')}>Props Example Children Content</PropsExample>
    </div>
  )
}
