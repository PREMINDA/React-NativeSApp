<View style={styles.bgstlyes}>
  {shopdata.items.map((item) => (
    <Card
      key={item.id}
      title={item.name}
      subtitle={item.price}
      image={{ uri: item.imageUrl }}
    />
  ))}
  <Card
    title="Jacket"
    subtitle="100"
    image={require("./app/assets/image/jacket.jpg")}
  />
</View>;
