export default (props: { teste: string; children: React.ReactNode }) => {
    if(props.teste) {
        return props.children
    } else {
        return false
    }
}