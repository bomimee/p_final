import Button from "../_components/Button";
import Form from "../_components/Form";
import Input from "../_components/Input";
import { createUser } from "../_lib/actions";

function Page() {
  return (
    <Form action={createUser} width="w-2/4">
      <p className="font-semibold">환영합니다.</p>
      <p className="font-semibold border-b-2 border-primary-950 pb-5 mb-8">
        당신의 취업을 진심으로 응원해요.
      </p>
      <div className="flex flex-col items-center justify-center gap-5">
        <Input placeholder="이름" />
        <Input placeholder="이메일" />
        <Input placeholder="생년월일" />
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <Input placeholder="비밀번호 재확인" />
        <Input placeholder="전화번호" />
        <div className="flex gap-2 border-b-2 border-gray-500 w-full">
          <input type="checkbox" />
          <p>모든 약관 사항에 전체 동의합니다.</p>
        </div>
        <Button type="medium-blue">회원가입</Button>
      </div>
    </Form>
  );
}

export default Page;
