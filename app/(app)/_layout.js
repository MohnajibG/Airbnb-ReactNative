import { Tabs } from "expo-router";

export default rootLayoutApp = () => {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        tabBarShowLabel: true,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: () => (
            <Image
              source={logo}
              style={{ width: 100, height: 40 }}
              resizeMode="contain"
            />
          ),
          tabBarLabel: "Home",
        }}
      />{" "}
    </Tabs>
  );
};
