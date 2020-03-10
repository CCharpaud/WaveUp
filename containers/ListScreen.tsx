import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Axios from "axios";

export default function ListScreen() {
  // States //
  // const [userId, setUserIdid] = useState("");
  // const [id, setId] = useState("");
  // const [title, setTitle] = useState("");
  // const [completed, setCompleted] = useState("");

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // API Call //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (response.data) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        alert("Une Erreur est survenue");
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <View>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Text style={{ color: "white", padding: 10 }}> {item.title} </Text>
          )}
        />
      )}
    </>
  );
}

/*      if (response.data) {
          setUserId(response.data.userId);
          setIsLoading(false);
        } else {
          alert("une erreur est survenue");
        }
      } catch (e) {
        alert("une erreur est survenue");
      }
    }; */
