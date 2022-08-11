import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import UserCard from "../components/UserCard";
import UserCardDetail from "../components/UserCardDetail";
import { useState } from "react";

const axios = require("axios");

export default function Home() {
  const [users, setUsers] = useState([]); //users = newusers[array]
  const [numInput, setNumInput] = useState(1);

  const genUsers = async () => {
    if (numInput < 1) {
      alert("Invalid number of users");
    } else {
      const resp = await axios.get(
        `https://randomuser.me/api/?results=${numInput}`
      );
      const newUses = [];
      for (const data of resp.data.results) {
        newUses.push({
          name: data.name.first + " " + data.name.last,
          email: data.email,
          imgUrl: data.picture.large,
          address: `${data.location.city} ${data.location.state} ${data.location.country} ${data.location.postcode}`,
        });
        setUsers(newUses);
      }
    }
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        {/* input */}
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setNumInput(event.target.value);
          }}
          value={numInput}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {users.map((x) => (
        <UserCard key={x.name} {...x} />
      ))}

      {/* {users.map((x) => (
        <UserCardDetail title={x} key={x} />
      ))} */}

      {/* Example of folded UserCard */}
      {/* <div className="border-bottom"> */}
      {/* main section */}
      {/* <div className="d-flex align-items-center p-3">
          <img
            src="/profile-placeholder.jpeg"
            width="90px"
            class="rounded-circle me-4"
          />
          <span className="text-center display-6 me-auto">Name...</span>
          <IconChevronDown />
        </div> */}

      {/* UserCardDetail is hidden */}
      {/* </div> */}

      {/* Example of expanded UserCard */}
      {/* <div className="border-bottom"> */}
      {/* main section */}
      {/* <div className="d-flex align-items-center p-3">
          <img
            src="/profile-placeholder.jpeg"
            width="90px"
            class="rounded-circle me-4"
          />
          <span className="text-center display-6 me-auto">Name...</span>
          <IconChevronUp />
        </div> */}

      {/* UserCardDetail*/}
      {/* <div className="text-center">
          <p>
            <IconMailForward /> Email...
          </p>
          <p>
            <IconMapPins /> Address...
          </p>
        </div>
      </div> */}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Natacha Rungbanpant 640610629
      </p>
    </div>
  );
}
