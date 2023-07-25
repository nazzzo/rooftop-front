## ROOFTOP

![rooftop-0](https://github.com/nazzzo/rooftop-front/assets/112994137/d1f2ef55-5774-4a70-bde3-c6e108a0e164)

![rooftop-1](https://github.com/nazzzo/rooftop-front/assets/112994137/fbb5f92c-7846-410f-ba8b-e84feedddb07)


루프탑은 뭄바이 네트워크를 기반으로 동작하는 **NFT 마켓 플레이스**입니다. <br>
컬렉션 생성과 NFT 민팅 과정에서 이미지 생성 AI를 활용했으며,  <br>
NFT 구입 및 판매, 장바구니와 Sweep 슬라이더를 통한 대량 구매, 경매 기능, 에어드롭 등  <br>
오픈씨나 Blur와 같은 유명 NFT 마켓 플랫폼에서 사용되는 주요 기능들을 대부분 구현하고 있습니다  <br>

<br> <br>

### [블록체인 관련 주요기능 소개]

<br>

**1. 컬렉션 생성**

- 런치패드를 통해 NFT 컬렉션을 생성합니다.
- 컬렉션의 설명란을 이미지 생성 AI의 프롬프트로 활용하고 있으며, 컬렉션 제작자는 로열티 지급 설정을 통해 판매 수수료를 나눠받을 수 있습니다.

![컬렉션 생성](https://github.com/nazzzo/rooftop-front/assets/112994137/48f766ff-20e8-44af-81fc-0660f66162ec)

<br> <br>

**2. NFT 민팅**

- NFT의 이미지 등록은 컬렉션 제작에 사용한 프롬프트를 재활용해서 컬렉션에 일체감을 줄 수 있도록 구현했습니다.
- 모든 NFT는 ERC-721 표준을 따르며, 메타데이터는 피나타 API를 통해 IPFS에 저장되고 있습니다.

![NFT 민팅](https://github.com/nazzzo/rooftop-front/assets/112994137/3223de2e-3751-497d-93ad-0e8b17ba9b5b)

<br><br>

**3. 거래**

- 단일 품목에 대한 거래와 장바구니를 통한 대량 거래가 가능합니다.
- 모든 거래 내역(이벤트 로그)은 DB에 함께 저장됩니다 
- 판매자는 마켓 수수료와 제작자 로열티를 뺀 값을 판매 대금으로 지급받습니다.

![거래](https://github.com/nazzzo/rooftop-front/assets/112994137/638a3855-7282-4922-88e7-aca812ec9b84)

<br><br>

**4. 경매**


- 경매가 시작되면 입찰액이 컨트랙트에 보관되며, 최고 입찰자가 바뀌면 기존의 입찰액은 환불됩니다.
- 판매자 입장에서는 미리 설정한 경매 종료 시간 전까지는 경매를 취소할 수 있지만, 종료 시간이 끝나면 반드시 경매를 종료해야 합니다.
- 입찰자 보호를 위해 마켓의 오너 계정에도 경매 종료 권한을 부여하고 있습니다.

![경매](https://github.com/nazzzo/rooftop-front/assets/112994137/0c9d3691-829c-4897-be6e-c6d58fa7b354)

<br><br>

**5. 에어드롭**


- 24시간마다 새로운 에어드롭 이벤트가 발생합니다.
- 이 기간 동안 드롭 이벤트 신청자들의 활동점수에 따라 고득점자에게 NFT를 선물합니다.

![에어드롭](https://github.com/nazzzo/rooftop-front/assets/112994137/03006086-971c-40da-9fbf-03affc4b154b)

<br><br>

**6. 지갑 연결**


- 메타마스크와 코인베이스 월렛을 지원하며, 사이트 내의 거래 관련 기능들은 뭄바이 네트워크에 연결 중일 때에만 활성화됩니다.

![지갑 연결](https://github.com/nazzzo/rooftop-front/assets/112994137/0c2a4931-67aa-48a8-8afa-ad2294f1e6e3)

<br><br>

[작업 환경]

프론트엔드 : Next.js <br>
백엔드 : Nest.js <br> 
스타일 : Tailwind CSS <br>
배포 서비스 : Amplify & Heroku <br>

<br>

API 문서: [https://nest-deploy-c764d61cc1b8.herokuapp.com/api](https://nest-deploy-c764d61cc1b8.herokuapp.com/api)
