export const useMyRoute = createGlobalState(() => {
  const active = useStorage('active', 'a', uniStorage)

  const tarbar = ref<{ name: string, path: string, key: string, icon: string }[]>([
    { name: 'a', path: '', key: 'a', icon: '' },
    { name: 'b', path: '', key: 'b', icon: '' },
    { name: 'c', path: '', key: 'c', icon: '' },
    { name: 'd', path: '', key: 'd', icon: '' },
    { name: 'e', path: '', key: 'e', icon: '' },
  ])

  return { active, tarbar }
})
