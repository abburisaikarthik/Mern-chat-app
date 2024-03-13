import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emoji";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, loading } = useGetConversations();
  console.log(conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className=" loading loading-spinner mx-auto "></span>
      ) : (
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))
      )}
    </div>
  );
};
export default Conversations;
