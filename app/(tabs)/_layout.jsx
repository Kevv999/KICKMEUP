import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: "#161622",
          },
          headerTitleStyle: {
            color: "white",
          },

          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "KICKMEUP",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={24}></Ionicons>
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: "KICKMEUP",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" color={color} size={24}></Ionicons>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
