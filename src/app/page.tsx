"use client";

import { Box, Card, CardContent, CardHeader } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        ".MuiCardContent-root": {
          pt: 0,
          li: { mb: 0.5, lineHeight: 1.5 },
        },
      }}
    >
      <Card>
        <CardHeader subheader="구글 소셜 로그인 구현" />
        <CardContent>
          <li>
            {`GoogleAuthProvider를 이용하여 구글 소셜 로그인을 요청합니다.`}
          </li>
          <li>
            {`prompt: "select_account" 옵션을 추가해서 로그인할 때마다 계정을
                선택할 수 있도록 합니다.`}
          </li>
        </CardContent>
      </Card>

      <Card>
        <CardHeader subheader="새로고침시 로그인 유지" />
        <CardContent>
          <li>
            {`onAuthStateChanged를 이용하여 로그인 상태가 변경될 때마다 특정 로직을 실행할 수 있습니다.`}
          </li>
          <li>
            {`onAuthStateChanged을 useEffect를 이용하여 컴포넌트가 마운트될 때 실행됩니다.`}
          </li>
          <li>
            {`onAuthStateChanged의 위치는 최상단 layout이므로 어떤 페이지에서도 로그인 상태를 감지할 수 있습니다.`}
          </li>
          <li>{`현재 로그인된 사용자의 정보는 인증이 되어있다면, auth.currentUser에 있습니다.`}</li>
          <li>{`유저 정보를 상태관리 라이브러리를 이용하여 관리합니다.`}</li>
        </CardContent>
      </Card>

      <Card>
        <CardHeader subheader="로그아웃 구현" />
        <CardContent>
          <li>{`signOut을 이용하여 로그아웃을 구현합니다.`}</li>
          <li>
            {`상태관리 라이브러리를 통해여 저장된 유저 정보를 초기화합니다.`}
          </li>
        </CardContent>
      </Card>

      <Card>
        <CardHeader subheader="계정 삭제 구현" />
        <CardContent>
          <li>{`deleteUser를 이용하여 계정 삭제를 구현합니다.`}</li>
          <li>
            {`로그인한지 오래된 계정의 경우는 reauthenticateWithCredential을 이용하여 재인증을 요청합니다.`}
          </li>
        </CardContent>
      </Card>
    </Box>
  );
}
