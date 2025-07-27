import "@coze/chat-sdk/webCss";
import ChatSdk from "@coze/chat-sdk/webJs";

const { ChatFramework, ChatSlot, ChatType, Language } = ChatSdk;

export default function App() {
  return (
    <div className="height-100">
      <ChatFramework
        chat={{
          appId: "7531632149716271104", // botId
          type: ChatType.Bot,
        }}
        setting={{
          apiBaseUrl: "http://localhost:8888",  //  coze studio openapi url
          language: Language.EN,
          requestHeader: {},
          logLevel: "debug",
        }}
        auth={{ // 个人访问令牌
          token: "pat_51cc1faec3aaad45a75613ba72ce2e63a5a16d50b06a3d46b92dcd23f7dc7149",
          onRefreshToken: (oldToken) => {
            return "pat_51cc1faec3aaad45a75613ba72ce2e63a5a16d50b06a3d46b92dcd23f7dc7149";
          },
        }}
        user={{
          id: "UserId123",
          name: "Mr.XXX",
          avatar:
            "https://sf16-passport-sg.ibytedtos.com/obj/user-avatar-alisg/e0622b06d99df6ead022ca4533ca631f.png",
        }}
      >
        <ChatSlot className={"chat-slot"} />
      </ChatFramework>
    </div>
  );
}
