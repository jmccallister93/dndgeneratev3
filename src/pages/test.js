const openDialogNpc = (e) => {
    setDialogVisibleNpc(true);
  };
  const closeDialogNpc = () => {
    setDialogVisibleNpc(false);
    for (let i = 0; i < selectedNpc.length; i++) {
      if (NpcList.includes(selectedNpc[i])) {
      } else {
        setNpcList((saveArray) => [...saveArray, selectedNpc[i]]);
      }
    }
  };
  const dialogFooterNpc = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogNpc} />;
  };

  useEffect(() => {
    setNpcOptions();
  }, [<Npcs />]);

  const onRandomNpc = (e) => {
    // const max = NpcOptions.length - 1;
    // let r = Math.round(Math.random() * (max - 0));
    // if (NpcList.includes(NpcOptions[r])) {
    // } else {
    //   setNpcList((saveArray) => [...saveArray, NpcOptions[r]]);
    // }
    console.log(NpcOptions);
    // setNpcList([NpcOptions[23].name])
  };
  const randomNpcBtn = (
    <Button onClick={onRandomNpc} className={style.btnName}>
      Random
    </Button>
  );

  const NpcDisplay = NpcList.map((i) => {
    return <h4>{`${i.name},`}</h4>;
  });