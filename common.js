//day 1 텍스트 내용=================================================
const day1Scenarios = [
    // 아침 — 집--------------------
    {location: '아침', type: 'dialogue', speaker: '알람', text: '♪♪♪', bg: 'image/room01.png'},
    {location: '아침', type: 'dialogue', speaker: '주인공', text: '아.. 벌써 학교 갈 시간이네. 빨리 씻고 가야겠다.'},
    {location: '아침', type: 'dialogue', speaker: '엄마', text: '얼른 일어나! 학교 늦겠다!', bg: 'image/room01-2.png'},
    {
        location: '아침',
        type: 'choice',
        situation: '일어났는데 엄마가 잔소리를 한다..',
        choices: [
            {
                text: '그래 늦으면 안되니까.. 빨리 준비한다.',
                isRude: false,
                like: 20,
                result: [
                    {speaker: '주인공', text: '알겠어, 빨리 준비할게..'},
                    {speaker: '엄마', text: '그래 어서 먹고 가.'},
                ]
            },
            {
                text: '왜 아침부터 잔소리야.. 화를 낸다.',
                isRude: true,
                like: -30,
                result: [
                    {speaker: '주인공', text: '아;; 일어났는데 왜 잔소리야! 내가 알아서 해.'},
                    {speaker: '엄마', text: '...'},
                    {speaker: '', text: '엄마가 말없이 주방으로 돌아간다.'},
                ]
            }
        ]
    },

    // 등교길-----------------
    {location: '등교길', type: 'dialogue', speaker: '', text: '학교로 향하는 길.', bg: 'image/road01.png'},
    {location: '등교길', type: 'dialogue', speaker: '친구', text: '야!! 같이 가자!', bg: 'image/road01-3.png'},
    {location: '등교길', type: 'dialogue', speaker: '', text: '학교 가는 중 친구를 만났다.', bg: 'image/road01.png'},
    {location: '등교길', type: 'dialogue', speaker: '친구', text: '어제 올라온 유튜브 봤어?ㅋㅋ 완전 재밌지 않냐'},
    {location: '등교길', type: 'dialogue', speaker: '', text: '퍽!!'},
    {location: '등교길', type: 'dialogue', speaker: '', text: '친구와 서로 웃으면서 밀치다가 실수로 옆 행인과 부딪히고 말았다.',bg: 'image/road01-2.png'},
    {
        location: '등교길',
        type: 'choice',
        situation: '실수로 옆 행인과 부딪혔다. 어떻게 할까?',
        choices: [
            {
                text: '부딪힌건 잘못했지.. 사과를 한다.',
                isRude: false,
                like: 20,
                result: [
                    {speaker: '주인공', text: '아.. 죄송합니다. 친구랑 장난치다가 그만...'},
                    {speaker: '행인', text: '아이고, 괜찮아요~'},
                    {speaker: '', text: '행인이 웃으면서 괜찮다고 한다.'},
                ]
            },
            {
                text: '친구가 밀어서 그런건데.. 친구에게 책임을 전가한다.',
                isRude: true,
                like: -30,
                result: [
                    {speaker: '주인공', text: '야 뭐해ㅋㅋ 앞 좀 보고 다녀;;'},
                    {speaker: '주인공', text: '너 때문에 옆 사람이랑 부딪혔잖아ㅋㅋ'},
                    {speaker: '', text: '행인이 싸늘한 눈빛으로 둘을 쳐다본다.'},
                    {speaker: '행인', text: '...'},
                    {speaker: '친구', text: '어, 어.. 죄송합니다..'},
                    {speaker: '행인', text: '아... 네'},
                ]
            }
        ]
    },
    {location: '등교길', type: 'dialogue', speaker: '친구', text: '야, 벌써 학교 도착했다. 이따 점심시간에 보자~', bg: 'image/road01.png'},

    // 교실 — 발표 수행평가--------------------------------
    {location: '교실', type: 'dialogue', speaker: '선생님', text: '자, 이 문제는 민재가 발표해볼까?', bg: 'image/class01.png'},
    {location: '교실', type: 'dialogue', speaker: '친구', text: '어.. 그게.. 그러니까',bg: 'image/class01-5.png' },
    {location: '교실', type: 'dialogue', speaker: '', text: '갑자기 당황한 나머지 정답을 까먹은 것 같다.'},
    {
        location: '교실',
        type: 'choice',
        situation: '발표 중 내용을 까먹고 당황한 친구. 어떻게 할까?',
        bg:'image/class01-2.png',
        choices: [
            {
                text: '어떡해 많이 떨렸나보다.. 발표가 끝나고 친구를 다독여준다.',
                isRude: false,
                like: 20,
                result: [
                    {speaker: '주인공', text: '야, 그래도 잘했어. 다음에 더 잘하면 되지~', bg:'image/class01-4.png'},
                    {speaker: '친구', text: '고마워.. 너무 떨렸나봐.'},
                    {speaker: '', text: '친구가 고맙다는 표정을 짓는다.'},
                ]
            },
            {
                text: '왜저래 진짜ㅋㅋ 친구를 비웃는다.',
                isRude: true,
                like: -30,
                result: [
                    {speaker: '주인공', text: 'ㅋㅋ 쟤 뭐함?'},
                    {speaker: '', text: '옆 친구들도 따라 웃기 시작한다.'},
                    {speaker: '', text: '친구가 시무룩한 표정으로 발표를 끝낸다.'},
                ]
            }
        ]
    },
    {location: '교실', type: 'dialogue', speaker: '', text: '그렇게 발표가 모두 끝나고...', bg: 'image/class01.png'},
    {location: '교실', type: 'dialogue', speaker: '선생님', text: '자, 여러분 발표하느라 수고 많았어. 다들 점심 맛있게 먹어~'},
    {location: '급식실', type: 'dialogue', speaker: '주인공', text: '와, 배고프다. 빨리 밥 먹으러 가야지.'},

    // 점심시간 — 급식실-------------------------
    {location: '급식실', type: 'dialogue', speaker: '', text: '오늘따라 줄이 엄청 기네...', bg: 'image/food01.png'},
    {location: '급식실', type: 'dialogue', speaker: '', text: '이때 같이 밥 먹기로 한 친구가 저 앞에 다른 친구와 줄을 서 있는 걸 발견한다.'},
    {location: '급식실', type: 'dialogue', speaker: '주인공', text: '야~ 나랑 같이 밥 먹기로 했으면서 왜 먼저 줄 서 있어?', bg: 'image/food01-2.png'},
    {location: '급식실', type: 'dialogue', speaker: '친구', text: '아 미안미안, 까먹었다ㅋㅋ 같이 먹자, 여기 줄 서!'},
    {
        location: '급식실',
        type: 'choice',
        situation: '친구 옆에 줄을 서야 하는 상황. 어떻게 할까?',
        choices: [
            {
                text: '아무리 그래도 그냥 서는건 안되지.. 뒤에 있는 사람에게 양해를 구한다.',
                isRude: false,
                like: 20,
                result: [
                    {speaker: '주인공', text: '저, 친구랑 같이 먹기로 해서요. 혹시 앞에 서도 될까요?'},
                    {speaker: '학생', text: '아 네, 괜찮아요~'},
                    {speaker: '', text: '뒤에 있던 사람이 흔쾌히 허락해준다.'},
                ]
            },
            {
                text: '친구가 먼저 제안했으니까.. 그냥 끼어든다.',
                isRude: true,
                like: -20,
                result: [
                    {speaker: '주인공', text: '아ㅋㅋ 나이스~ 밥 바로 먹을 수 있겠다ㅋㅋ'},
                    {speaker: '', text: '뒤에 있던 사람이 못마땅한 표정을 짓는다.'},
                    {speaker: '학생', text: '...(한숨)'},
                ]
            }
        ]
    },
    {location: '급식실', type: 'dialogue', speaker: '주인공', text: '아~ 맛있었다...', bg: 'image/food01-3.png'},
    {location: '급식실', type: 'dialogue', speaker: '주인공', text: '나 교실 들어갈게~ 이따 보자.'},
    {location: '카페', type: 'dialogue', speaker: '', text: '♪♪♪ (학교 종소리)'},

    // 카페 알바-------------------------------------------
    {location: '카페', type: 'dialogue', speaker: '', text: '수업이 끝나고 알바를 하러 카페로 이동했다. 오늘도 사람이 붐빈다.', bg: 'image/cafe01.png'},
    {location: '카페', type: 'dialogue', speaker: '주인공', text: '아... 드디어 휴게시간이다. 좀 쉬어야지.'},
    {location: '카페', type: 'dialogue', speaker: '손님', text: '저기.. 키오스크 사용이 너무 어려워서요. 혹시 카운터에서 결제 가능할까요?', bg: "image/cafe01-2.png"
    },
    {
        location: '카페',
        type: 'choice',
        situation: '휴게시간 중 도움을 요청하는 손님이 나타났다. 어떻게 할까?',
        choices: [
            {
                text: '지금 다른 알바들 다 바쁘니까.. 손님을 도와드린다.',
                isRude: false,
                like: 20,
                result: [
                    {speaker: '주인공', text: '아, 네! 제가 도와드릴게요~'},
                    {speaker: '손님', text: '아이고 감사합니다, 요즘 기계를 잘 못 다뤄서..'},
                    {speaker: '', text: '손님이 환하게 웃으며 감사 인사를 건넨다.'},
                ]
            },
            {
                text: '휴게시간인데.. 다른 알바도 있으니 못 들은 척 그냥 자리를 피한다.',
                isRude: true,
                like: -20,
                result: [
                    {speaker: '', text: '못 들은 척 그냥 자리를 피한다.'},
                    {speaker: '', text: '손님이 난감한 표정으로 한참을 서 있다.'},
                    {speaker: '손님', text: '저기요...?'},
                ]
            }
        ]
    },

    // 편의점-------------------------------
    {location: '편의점', type: 'dialogue', speaker: '주인공', text: '와, 드디어 알바 끝!! 오늘 진짜 힘들었다.', bg: 'image/store01.png'},
    {location: '편의점', type: 'dialogue', speaker: '', text: '같이 알바한 친구와 편의점에서 밥을 먹고 집에 들어가기로 했다.'},
    {location: '편의점', type: 'dialogue', speaker: '주인공', text: '와 라면 진짜 맛있겠다!'},
    {location: '편의점', type: 'dialogue', speaker: '', text: '신나게 음식을 고르고 야외 테이블에서 밥을 먹고 있는데..'},
    {location: '편의점', type: 'dialogue', speaker: '친구', text: '야, 벌써 10시 55분인데?',},
    {location: '편의점', type: 'dialogue', speaker: '주인공', text: '뭐? 나 11시까지 안 들어가면 진짜 엄청 혼나는데;; 야 빨리 가자!', bg: 'image/store01-2.png'},
    {
        location: '편의점',
        type: 'choice',
        situation: '통금 시간이 5분밖에 안 남았다. 어떻게 할까?',
        choices: [
            {
                text: '그래도 먹은건 치워야지.. 빨리 치우고 함께 집으로 뛰어간다.',
                isRude: false,
                like: 10,
                result: [
                    {speaker: '주인공', text: '야, 늦기 전에 빨리 치우고 가자!'},
                    {speaker: '친구', text: 'ㅇㅇ 빨리빨리!'},
                    {speaker: '', text: '둘이서 쓰레기를 치우고 함께 뛰어간다.'},
                ]
            },
            {
                text: '아 늦으면 진짜 혼날텐데.. 바로 혼자 뛰어간다.',
                isRude: true,
                like: -20,
                result: [
                    {speaker: '주인공', text: '야 그냥 빨리 가자; 이건 돈받고 일하는 알바생이 치우겠지.'},
                    {speaker: '친구', text: '어? 야 잠깐만—'},
                    {speaker: '', text: '친구가 황당한 표정으로 혼자 뒷정리를 한다.'},
                ]
            }
        ]
    },

    // 귀가 — 집------------------------------
    {location: '집', type: 'dialogue', speaker: '', text: '그렇게 집으로 돌아왔다.', bg: 'image/room01.png'},
    {location: '집', type: 'dialogue', speaker: '주인공', text: '아 너무 피곤해... 그냥 바로 자야겠다.'},
    {location: '집', type: 'dialogue', speaker: '', text: '눈을 감자마자 잠에 빠져들었다. 오늘 하루도 이렇게 끝났다.'},
]

//day2 텍스트 내용 =====================================================================================================
const day2Scenarios = [
    // 아침 ================================================================
    {location: '아침', type: 'dialogue', speaker: '주인공', bg: 'image/room01.png', text: '아... 벌써 아침이야'},
    {location: '아침', type: 'dialogue', speaker: '', text: '눈을 떠보니 사방이 고요하다. 불길한 마음에 시계를 확인하니...'},
    {location: '아침', type: 'dialogue', speaker: '주인공', text: '헉... 뭐야, 왜 벌써 8시 반이야?! 엄마 왜 안 깨웠어!!'},
    {
        location: '아침', type: 'dialogue', speaker: '엄마', checkHistory: '아침', bg: 'image/room01-2.png',
        rudeText: '어제 네가 나한테 아침부터 잔소리하지 말라고, 네 인생 알아서 산다고 고래고래 소리 질렀잖니.',
        rudeText: '그래서 네 말대로 한건데, 너 스스로 잘 일어났어야지.',
    },
    {
        location: '아침', type: 'choice',
        situation: '어제 내가 저지른 반항 때문에 엄마의 태도가 얼음장처럼 차갑다. 어떻게 할까?',
        choices: [
            {
                text: '“학교 늦게 생겼는데 딸이 늦든 말든 지켜만 봐? 진짜 너무해!!” 적반하장으로 화를 낸다.',
                isRude: true, like: -20,
                result: [
                    {speaker: '주인공', text: '아니, 그래도 딸이 지각하게 생겼는데 그걸 보고만 있어?'},
                    {speaker: '주인공', text: '진짜 엄마 맞아? 아 짜증나!!'},
                    {speaker: '엄마', text: '네 말대로 냅뒀더니 왜 엄마한테 짜증이야?'},
                    {speaker: '엄마', text: ' 너 알아서 해! 버스든 택시든 네 돈으로 알아서 가!'}
                ]
            },
            {
                text: '“엄마, 어제는 내가 정말 미안해...” 예민하게 굴었던 행동을 반성하며 사과한다.',
                isRude: false, like: 20,
                result: [
                    {speaker: '주인공', text: '엄마... 어제 아침에 짜증 섞인 말 한 거 정말 죄송해요. 제가 늦어놓고 엄마 탓해서 미안해요...'},
                    {speaker: '엄마', text: '...지가 잘못한 줄은 아나 보네. 한숨 푹 쉬고) 늦었으니까 얼른 가방 메라. 오늘은 엄마가 차로 교문 앞까지 태워줄게.'}
                ]
            }
        ]
    },
    // 등교길========================================================================================
    {location: '등교길', type: 'dialogue', speaker: '', bg: 'image/road01.png', text: '허겁지겁 가방을 챙겨 들고 학교를 향해 정신없이 뛰어가기 시작했다.'},
    {location: '등교길', type: 'dialogue', speaker: '', text: '퍽!!!'},
    {location: '등교길', type: 'dialogue', speaker: '', text: '코너를 도는 순간, 맞은편에서 오던 행인과 어깨를 정면으로 강하게 쾅!! 부딪혔다.', bg: 'image/road01-4.png'},
    {location: '등교길', type: 'dialogue', speaker: '행인', checkHistory: '등교길', rudeText: '아, 진짜 눈을 어디다 두고 다니는 거야?',},
    {location: '등교길', type: 'dialogue', speaker: '행인', checkHistory: '등교길', rudeText: '앞 좀 제대로 보고 다녀요;; 아침부터 짜증나게 시비야 진짜',},
    {
        location: '등교길', type: 'choice',
        situation: '길가다 모르는 행인과 부딫혔는데 나한테 엄청 화를 낸다.. 어떻게 할까?',
        choices: [
            {
                text: '“자기 눈은 장식인가?” 같이 째려보면서 상대방의 어깨를 밀치고 지나간다.',
                isRude: true, like: -20,
                result: [
                    {speaker: '주인공', text: '뭐라는 거야? 너나 눈 똑바로 뜨고 다녀;;'},
                    {speaker: '주인공', text: '눈이 작아서 앞도 안보이나...짜증 나게 진짜!'},
                    {speaker: '행인', text: '뭐? 어린 게 가정교육을 어떻게 받았길래 말버릇이 저 모양이야?'},
                    {speaker: '', text: '화를 내는 행인을 무시하고 학교로 달려간다.', bg: 'image/road01.png'},
                ]
            },
            {
                text: '“그래도 무작정 화부터 내시면 안 되죠.” 차분하게 말을 건넨다.',
                isRude: false, like: 20,
                result: [
                    {speaker: '주인공', text: '저도 바빠서 앞을 제대로 못 본 건 죄송한데, 그렇다고 그렇게 심한 말씀까지 하실 건 없잖아요. 서로 조심해요.'},
                    {speaker: '행인', text: '...아, 죄송합니다. 오늘 아침부터 일정이 다 꼬여서.. 제가 이성을 잃었었나 봐요.'},
                    {speaker: '행인', text: '괜히 지나가던 학생한테 화풀이했네, 미안해요.'}
                ]
            }
        ]
    },
    // 교실 ====================================================================
    {location: '교실', type: 'dialogue', speaker: '', bg: 'image/class01.png', text: '우여곡절 끝에 지각을 면하고 교실 자리에 멍하니 앉아 수업을 듣기 시작했다.'},
    {location: '교실', type: 'dialogue', speaker: '선생님', text: '자 주인공, 칠판에 적힌 3번 문제 정답이 뭔지 발표해볼래?'},
    {location: '교실', type: 'dialogue', speaker: '주인공', text: '앗... 그... 45... 아니, 20이요!'},
    {location: '교실', type: 'dialogue', speaker: '친구', checkHistory: '교실', rudeText: '엌ㅋㅋㅋ 야 이걸 모르냐?', bg: 'image/class01-2.png'},
    {location: '교실', type: 'dialogue', speaker: '친구', checkHistory: '교실', rudeText: '와.. 넌 학교 왜 다니냐? 시간아깝게ㅋㅋㅋ',},
    {
        location: '교실', type: 'choice',
        situation: '어제 놀렸던 친구가 반대로 나를 놀리기 시작한다. 어떻게 할까?',
        choices: [
            {
                text: '나를 대놓고 비웃는 친구에게 손가락질을 하며 똑같이 비난한다.',
                isRude: true, like: -20,
                result: [
                    {speaker: '주인공', text: '야;; 너는 어제 발표할 때 대가리 하얘져서 얼타던 거 생각 안 남?! 너나 잘해ㅋㅋ;;'},
                    {speaker: '친구', text: 'ㅋㅋㅋ 긁혔네? 긁혔어? 꼬우면 정답을 맞추던가~ 꼴좋다 진짜!'}
                ]
            },
            {
                text: '“어제 괴롭힌 것 때문에 그런가...” 진심을 담아 어제 일을 사과한다.',
                isRude: false, like: 20,
                result: [
                    {speaker: '', text: '수업 종이 울리고, 쉬는 시간이 되자마자 쭈뼛거리며 친구에게 다가갔다.'},
                    {speaker: '주인공', text: '저기... 어제 너 발표할 때 내가 유치하게 비웃고 놀린거 정말 미안해..', bg: 'image/class01-3.png'},
                    {speaker: '주인공', text: '내가 비웃음 당하니까 기분 엄청 비참하네... 사과할게.'},
                    {speaker: '친구', text: '...어?'},
                    {speaker: '친구', text: '아... 나도 아까는 말이 심했던 것 같네.. 나도 미안해.'}
                ]
            }
        ]
    },
    // 급식실 =============================================================================================================
    {location: '급식실', type: 'dialogue', speaker: '', bg: 'image/food01.png', text: '4교시 종소리가 울리자마자 굶주린 배를 움켜쥐고 급식실로 내려갔다. 여전히 줄이 끝도 없이 길다.'},
    {location: '급식실', type: 'dialogue', speaker: '주인공', text: '아~~ 줄 언제 줄어... 배고파 죽겠네 진짜 ㅠㅠ',},
    {location: '급식실', type: 'dialogue', speaker: '앞사람', checkHistory: '급식실', rudeText: '야!! 여기로 와ㅋㅋ 내가 자리 맡아둠ㅋㅋㅋ', bg: 'image/food01-4.png'},
    {location: '급식실', type: 'dialogue', speaker: '앞사람', checkHistory: '급식실', rudeText: '아 뭐 어때~ 괜찮아ㅋㅋ 꼬우면 나보다 먼저 왔으면 되는거 아님?ㅋㅋ',},
    {
        location: '급식실', type: 'choice',
        situation: '내 바로 코앞에서 다른 학생들이 뻔뻔하게 새치기를 한다. 어떻게 할까?',
        choices: [
            {
                text: '“개판이네 진짜!” 분노하며 나도 질서 따위 개나 주고 그 친구 앞으로 비집고 새치기한다.',
                isRude: true, like: -20,
                result: [
                    {speaker: '앞사람', text: '뭐야? 넌 뭔데 끼어들어? 미쳤나 봐 진짜;'},
                    {speaker: '주인공', text: '왜? 너네도 마음대로 줄 끼어들었잖아. 뭘 봐? 나도 똑같이 할 건데?'},
                    {speaker: '', text: '앞에 서있던 학생들의 따가운 시선이 나에게로 쏟아지기 시작한다.'},
                ]
            },
            {
                text: '“뒤에 사람 안 보여요? 줄 똑바로 서세요.” 단호하고 정중하게 규칙을 바로잡는다.',
                isRude: false, like: 20,
                result: [
                    {speaker: '주인공', text: '저기요, 뒤에 줄 서서 순서 기다리는 수많은 학생들 안 보이세요?', bg: 'image/food01-5.png'},
                    {speaker: '주인공', text: '다들 배고픈데 참아가며 서 있는 건데 말도 없이 새치기 하는건 아니죠. 뒤로 가서 다시 서세요.'},
                    {speaker: '앞사람', text: '아씨... 짜증나. 야, 그냥 뒤로 가자.'},
                    {speaker: '', text: '본인들의 행동이 부끄러웠는지 뒤로 이동한다.'},
                ]
            }
        ]
    },

    // 카페 =================================================================================

    {location: '카페', type: 'dialogue', speaker: '', bg: 'image/cafe01-3.png', text: '학교 일과가 끝나고, 오랜만에 공부하러 카페로 이동했다.'},
    {location: '카페', type: 'dialogue', speaker: '', text: '주문을 하려는데 오늘따라 키오스크 터치스크린이 먹통이 되고 결제 오류가 계속 뿜어져 나온다.'},
    {location: '카페', type: 'dialogue', speaker: '주인공', text: '아... 짜증나게 왜 안되는거야',},
    {location: '카페', type: 'dialogue', speaker: '주인공', text: '저기... 죄송한데, 카운터에서 결제 되나요?', bg: 'image/cafe01-4.png'},
    {location: '카페', type: 'dialogue', speaker: '알바생', checkHistory: '카페', rudeText: '...',},
    {location: '카페', type: 'dialogue', speaker: '주인공', checkHistory: '카페', rudeText: '저기요?',},
    {location: '카페', type: 'dialogue', speaker: '알바생', checkHistory: '카페', rudeText: '하..',},
    {location: '카페', type: 'dialogue', speaker: '알바생', checkHistory: '카페', rudeText: '저기 키오스크에서 하시면 되잖아요',},
    {location: '카페', type: 'dialogue', speaker: '알바생', checkHistory: '카페', rudeText: '알바생이 귀찮다는 듯한 표정으로 째려본다.',},
    {
        location: '카페', type: 'choice',
        situation: '알바생한테 도움을 요청했지만 무시당한 것 같다.. 어떻게 할까?',
        choices: [
            {
                text: '“돈 받고 일하는 꼴 봐라?” 이성을 잃고 점원에게 폭언을 날린다.',
                isRude: true, like: -20,
                result: [
                    {speaker: '주인공', text: '저기요, 돈 받고 일하는 알바생 주제에 일을 그따위로 해요?'},
                    {speaker: '주인공', text: '서비스 마인드가 완전 쓰레기 수준이네! '},
                    {speaker: '알바생', text: '네?.. 아..'},
                    {speaker: '주인공', text: '아.. 짜증나 진짜.. 일할거면 좀 제대로 해요!'},
                    {speaker: '주인공', text: '짜증이 몰려와 문을 박차고 나갔다.'},
                ]
            },
            {
                text: '“저기요 키오스크가 고장 난 것 같은데요..” 분노를 억누르고 다시한번 도움을 요청한다.',
                isRude: false, like: 20,
                result: [
                    {speaker: '주인공', text: '저기요 키오스크 결제가 아에 안되는데.. 한번만 확인 해주세요'},
                    {speaker: '알바생', text: '...아, 죄송해요 손님! 너무 바빠서 요청을 못 들었네요'},
                    {speaker: '알바생', text: '일단 카운터에서 결제 도와드리겠습니다!'}
                ]
            }
        ]
    },

    // 편의점 ======================================================================
    {location: '편의점', type: 'dialogue', speaker: '', bg: 'image/store01-3.png', text: '긴 하루가 지나고 캄캄한 밤이 되었다. 지친 몸을 이끌고 터덜터덜 집으로 귀가하는 길.'},
    {location: '편의점', type: 'dialogue', speaker: '', text: '편의점 앞 야외 테이블을 지나가는데, 불량해 보이는 학생들이 먹다 버린 라면 용기와 쓰레기를 난장판으로 만들고 도망치는 걸 목격했다.'},
    {location: '편의점', type: 'dialogue', speaker: '주인공', text: '와.. 먹던 걸 안치우고 그냥 가네'},
    {location: '편의점', type: 'dialogue', speaker: '편의점알바', checkHistory: '편의점', rudeText: '어이, 거기 학생!! 딱 걸렸어! 먹었으면 쓰레기는 치우고 가야지 어딜 슬쩍 그냥 도망가려고 해?!', bg: 'image/store01-4.png'},
    {
        location: '편의점', type: 'choice',
        situation: '다른 학생들이 버리고 간 쓰레기를 내가 버린걸로 오해받았다. 어떻게 할까?',
        choices: [
            {
                text: '“내가 안 먹었다고 미친놈아!!” 눈이 뒤집혀 알바생에게 온갖 쌍욕과 저주를 퍼붓는다.',
                isRude: true, like: -20,
                result: [
                    {speaker: '주인공', text: '뭐라는거야? 내가 안 먹었다고!! 어디서 알바나 하는 주제에 생사람을 잡아? 짜증 나게!!'},
                    {speaker: '주인공', text: '이렇게 머리가 나쁘니까 알바나 하지.. 어휴'},
                    {speaker: '편의점알바', text: '어디서 인신공격이야?! 당장 매장 안으로 들어와! 경찰 불러서 CCTV 돌려보면 다 나오니까 허위사실 유포로 인과응보를 보여줄 테다!!'}
                ]
            },
            {
                text: '“방금 다른 학생들이 버리고 간 거예요.” 억울하지만 깊게 숨을 들이쉬고 이성적으로 설명한다.',
                isRude: false, like: 20,
                result: [
                    {speaker: '주인공', text: '진정하세요, 사장님. 이거 제가 먹은 게 아니라 방금 골목길 쪽으로 깔깔대며 도망간 학생들이 저질러 놓은 거예요. 억울하게 범인으로 오해하셔서 저도 순간 서운했지만... 밤늦게 혼자 치우려면 막막하시겠어요.'},
                    {speaker: '동네 할머니', text: '그려, 내가 봤는데 아까 저 머리 노란 애들이 먹고 도망간 겨. 이 학생은 그냥 지나가던 길이었어~ 오해하지 말어.', bg: 'image/store01-5.png'},
                    {speaker: '편의점알바', text: '...헉, 아... 정말 죄송합니다... 요새 치우지도 않고 도망가는 빌런들이 너무 많아서 제가 홧김에 이성을 잃고 무례를 저질렀네요... 진심으로 오해해서 사과드립니다.'}
                ]
            }
        ]
    }
];

//=======================================================================================================

const isEndingPage = window.location.pathname.includes('ending.html');


let diaBox;
let diaSpeaker;
let diaText;
let nextBtn;
let choiceModal;
let charImg;
let effectImg;
let day1Wrap;
let minigameModal;

if (!isEndingPage) {
    diaBox       = document.getElementById('dia-box');
    diaSpeaker   = document.getElementById('dia-speaker');
    diaText      = document.getElementById('dia-text');
    nextBtn      = document.querySelector('.nextdia-btn');
    choiceModal  = document.getElementById('choice-modal');
    charImg      = document.getElementById('char-img');
    effectImg    = document.getElementById('effect-img');
    day1Wrap     = document.querySelector('.day1-wrap');
    minigameModal = document.getElementById('minigame-modal');
}

let currentIndex      = 0;
let likeValue         = 100;
let currentDay        = 1;
let rudeHistory       = [];
let todayRudeEntries  = [];
let scenarios         = [];

// day 별로 시나리오 진행. 시나리오가 끝나면 ending.html으로 이동==========================================
function runScenario(index) {
    // 현재 진행중인 인덱스와 시나리오 길이 비교 (인덱스가 더 클 경우 하루 끝)
    if (index >= scenarios.length) {
        // day1일 때
        if (currentDay === 1) {
            if (rudeHistory.length === 0) {
                // 무례한 선택이 0일 경우 최종 데이, 점수 저장 후 엔딩 장면으로 이동
                localStorage.setItem('finalDay', 1);
                localStorage.setItem('finalScore', likeValue);
                saveWeakSituation();
                location.href = 'ending.html';
                return;
            }

            // 날짜를 2로 변경, 인덱스 0으로 초기화.
            currentDay = 2;
            currentIndex = 0;
            scenarios = day2Scenarios.filter(scene => rudeHistory.includes(scene.location));
            todayRudeEntries = [];
            //day가 바뀌는 장면
            showDayTransition(currentDay, "...", () => {
                //day2 시나리오 시작
                runScenario(currentIndex);
            });
        }
        //아닐 경우 무례한 행동들을 rudeHistory에 저장(저장된 무례한 행동에 대한 상황만 다음날 보여줌)
        else {
            rudeHistory = [...todayRudeEntries];

            //만약 길이가 0보다 크다면
            if (rudeHistory.length > 0) {
                if (currentDay >= 7) {
                    // day7보다 현재 day가 크면 배드엔딩
                    localStorage.setItem('finalDay', 7);
                    localStorage.setItem('finalScore', likeValue);
                    saveWeakSituation();
                    location.href = 'ending.html';
                }
                //아닐 경우 날짜 1씩 더 추가
                else {
                    currentDay++;
                    currentIndex = 0;
                    scenarios = day2Scenarios.filter(scene => rudeHistory.includes(scene.location));
                    todayRudeEntries = [];
                    showDayTransition(currentDay, "되돌려 받은 오늘. 어딘가 어긋나버린 아침이 다시 시작됩니다.", () => {
                        runScenario(currentIndex);
                    });
                }
            // 아닐 경우(0보다 작다) > 무례 선택을 멈췄다는 의미
            } else {
                // 엔딩 출력
                localStorage.setItem('finalDay', currentDay);
                localStorage.setItem('finalScore', likeValue);
                saveWeakSituation();
                location.href = 'ending.html';
            }
        }
        return;
    }

    //시나리오 인덱스 번호에 맞는 내용 출력
    const scene = scenarios[index];
    //타입별로 함수 호출(대화, 선택지)
    if (scene.type === 'dialogue') {
        showDialogue(scene);
    }
    else if (scene.type === 'choice') {
        showChoice(scene);
    }
}

//마우스 이동시 발생하는 이미지 무빙 =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const gameScreen = document.getElementById('game-screen');
    const bgPan = document.querySelector('.bg-pan');

    // 게임 스크린과 배경 이미지가 페이지에 존재할 경우
    if (gameScreen && bgPan) {
        // 웹사이트 전체 페이지 내에서 마우스를 따라 이미지에 무빙을 넣는다.
        window.addEventListener('mousemove', (e) => {

            // 브라우저 전체 창의 가로, 세로 크기 구하기
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // 전체 화면 기준 마우스 현재 위치 비율 계산(픽셀 단위로 계산할 경우 창 크기마다 속도가 달라지기 때문에 일정한 속도 유지를 위해 비율로 변환시킨다. )
            const xPercent = e.clientX / windowWidth;
            const yPercent = e.clientY / windowHeight;

            // 3. 중심점(0.5) 기준 이동 거리 연산(마우스가 오른쪽으로 가면 배경은 왼쪽으로 밀리도록 하기 위해 -를 곱함)
            const maxMove = 60; // 최대로 얼마나 이미지를 밀어낼 것인지 범위 지정
            const moveX = (xPercent - 0.5) * -maxMove;
            const moveY = (yPercent - 0.5) * -maxMove;

            // 계산된 좌표만큼 배경 이미지를 이동시킨다.
            bgPan.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
});

// ====================================================================
function showDialogue(scene) {
    if (isEndingPage) return; // 엔딩페이지면 대화창 작동을 멈춘다.

    const effSound = new Audio('sound/text.mp3'); // 대화창 클릭 시 나는 소리
    effSound.volume = 0.3;
    effSound.play().catch(e => {});

    //숨겨진 대화창을 보여줌
    diaBox.style.display = 'block';
    // effectImg.style.display = 'none';
    //scene.bg의 이미지를 배경화면으로 띄운다.
    if (scene.bg) {
        const bgPan = document.querySelector('.bg-pan');
        if (bgPan) {
            bgPan.style.backgroundImage = "url('" + scene.bg + "')";
            // 이미지가 바뀔 때 마우스 위치 때문에 한쪽으로 치우쳐 보이는 현상 예방(위치를 중앙으로 리셋시킨다. )
            bgPan.style.transform = `translate(0px, 0px)`;
        }
    }

    const gameScreen = document.getElementById('game-screen');
    // 게임 day가 늘어날수록 화면 밝기가 조금씩 어두워진다 (계속 반복되는 day를 빨리 벗어나도록 이끌기 위한 요소)
    if (gameScreen) {
        const brightnessVal = 1 - (currentDay - 1) * 0.35; //기본 밝기에서 특정 수만큼 빼서 점점 어두워지도록
        gameScreen.style.filter = `brightness(${brightnessVal})`;
    }
    //
    let displayText = scene.text;
    //전날 무례하게 굴었던 장소의 rudetext를 출력한다. (day2의 무례한 대사)
    if (scene.checkHistory && rudeHistory.includes(scene.checkHistory)) {
        if (scene.rudeText) displayText = scene.rudeText;
    }

    diaSpeaker.innerText = scene.speaker;
    diaText.innerText    = displayText;

    //말하는 사람 비어있을 경우, 숨김 처리한다. 아닐 경우에만 보이도록
    if (scene.speaker === '') {
        diaSpeaker.style.visibility = 'hidden';
    } else {
        diaSpeaker.style.visibility = 'visible';
    }
    //현재 day를 화면에 출력
    const dayView = document.querySelector('.current-day-view');
    if (dayView) {
        dayView.innerText = currentDay;
    }
}
//선택지 모달창 ======================================================================================
function showChoice(scene) {
    if (isEndingPage) return;
    //일반 대화창 숨기고 선택모달창을 띄운다.
    diaBox.style.display = 'none';
    choiceModal.style.display = 'block';

    let btnHTML = '';
    //scene.choices에 작성된 선택지 갯수 만큼 반복문을 돌며 버튼 생성
    //data-index="${i}" 를 버튼마다 넣어서 몇번째 버튼인지 확인할 수 있도록 한다.
    scene.choices.forEach(function (choice, i) {
        btnHTML += '<button class="choice-btn" data-index="' + i + '">' + choice.text + '</button>';
    });
    //버튼, 상황 텍스트, 타이머 바를 모달창 안에 배치한다.
    choiceModal.innerHTML = `<p class="choice-situation">${scene.situation}</p><div class="choice-timer-bg"><div id="choice-timer-bar"></div></div><div class="choice-btn-wrap">${btnHTML}</div>`;

    //타임 바=======================
    let choiceBar = document.querySelector('#choice-timer-bar');
    let choiceTimer = null;
    choiceBar.style.width = "100%"; // 가로폭 100%
    let totalTime = 10, timeStep = 0.1, timeLeft = totalTime;
    clearInterval(choiceTimer);

    choiceTimer = setInterval(() => {
        timeLeft -= timeStep; //timeStep만큼 타이머를 깎는다.
        let widthPercent = (timeLeft / totalTime) * 100; // 남는 시간을 퍼센트화
        choiceBar.style.width = widthPercent + "%";// 퍼센트를 가로폭으로 저장하여 실시간으로 시간 바가 줄어들도록
        // const day1TimeText = document.querySelector('.day1-time');
        // if (day1TimeText) day1TimeText.innerText = Math.ceil(timeLeft);

        //시간이 0이 되면
        if (timeLeft <= 0) {
            clearInterval(choiceTimer);
            choiceModal.style.display = 'none'; // 창을 닫는다.
            //무례한 선택지 자동 선택
            const rudeChoice = scene.choices.find(c => c.isRude) || scene.choices[scene.choices.length - 1]; // isRude를 찾은 다음, 해당 선택지를 선택한다.(혹시나 isRude를 빼먹었을 경우에는 배열의 마지막 번호(마지막 선택지)를 자동 선택하도록)
            alert("시간 초과! 욱하는 마음에 무례하게 행동합니다.");
            applyChoice(rudeChoice);
        }
    }, 100);

    choiceModal.querySelectorAll('.choice-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            clearInterval(choiceTimer); //만약 버튼 클릭했을 경우 타이머를 멈춘다.
            const idx = Number(btn.dataset.index);
            const selectedChoice = scene.choices[idx];

            // day1일 때 무례하지 않은 선택지를 골랐다면 미니게임 진행
            if (currentDay === 1 && selectedChoice.isRude === false) {
                choiceModal.style.display = 'none';
                startMinigame(scene, selectedChoice);
            }
            // 아닐 경우 미니게임 없이 선택한 시나리오로 진행
            else {
                choiceModal.style.display = 'none';
                applyChoice(selectedChoice);
            }
        });
    });
}
//미니게임==========================================================
function startMinigame(currentScene, respectChoice) {
    if (isEndingPage) return;
    //방향키 4개 중 랜덤으로 10개를 생성하는 코드
    const keyTypes = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    const arrowIcons = {'ArrowUp': '↑', 'ArrowDown': '↓', 'ArrowLeft': '←', 'ArrowRight': '→'};
    let targetCommands = [];
    for (let i = 0; i < 10; i++) { // for문을 10번 돌리면서 랜덤으로 방향키 중 하나를 선택해 리스트 저장한다.
        let randomKey = keyTypes[Math.floor(Math.random() * keyTypes.length)];
        targetCommands.push(randomKey);
    }
    let userProgress = 0, timeLeft = 4, gameTimer = null; //4초동안 진행
    // 10개의 화살표를 foreach로 돌면서 html 박스로 생성시킨다.
    let commandHTML = '';
    targetCommands.forEach((cmd, i) => { // 플레이어가 눌러야 할 화살표(i===0)에 불이 들어오도록 (현재 눌러야 하는 버튼을 시각적으로 한눈에 보이도록)
        let activeClass = (i === 0) ? 'arrow-box current' : 'arrow-box';
        // 기존의 html 문자열 뒤에 새로 만든 html을 두고,foreach로 반복을 돌며 총 10개의 화살표 상자를 만든다
        commandHTML += `<div class="arrow-box ${activeClass}" id="arrow-${i}">${arrowIcons[cmd]}</div>`;
    });
    // 모달창 띄움
    minigameModal.innerHTML = `<h3>⚠️ 욱하는 감정이 나오려 합니다 ⚠️</h3><p>제한시간 내에 아래의 방향키를 정확히 입력하세요!</p><div class="mini-timer-text">남은 시간: <span id="mini-time">${timeLeft}</span>초</div><div class="command-wrap">${commandHTML}</div><p style="color: #ff4a4a; font-size: 13px;">* 단 한 번이라도 틀리면 즉시 실패합니다.</p>`;
    minigameModal.style.display = 'block';

    const miniTimeSpan = document.getElementById('mini-time');
    function handleKeyDown(e) {
        // if (!keyTypes.includes(e.key)) return; // 방향키가 아닌 키는 무시
        e.preventDefault(); // 방향키를 눌렀을 때 화면이 스크롤되는 경우를 막음

        let correctKey = targetCommands[userProgress]; // 화살표 배열
        //맞는 방향키를 입력했을 경우
        if (e.key === correctKey) {
            let currentBox = document.getElementById(`arrow-${userProgress}`);
            currentBox.classList.remove('current');
            currentBox.classList.add('success');
            userProgress++; // 다음 화살표로 넘어감
            if (userProgress >= 10) {
                endGame(true);
            } // 10개 이상 맞추면 게임 통과
            //10개를 못채운 경우, 다음 번호의 화살표 상자를 밝게 표시한다
            else { document.getElementById(`arrow-${userProgress}`).classList.add('current'); }
        } else { endGame(false); } // 맞는 방향키 제외 입력하면 게임 실패 처리
    }
    // 플레이어가 어떤 키를 누르든 handleKeyDown을 실행해서 정답 확인
    window.addEventListener('keydown', handleKeyDown);
    gameTimer = setInterval(function () {
        timeLeft--;
        miniTimeSpan.innerText = timeLeft;
        if (timeLeft <= 0) { endGame(false); }
    }, 1000); // 게임 타이머(1초동안 timeleft에서 1씩 깎는다. 총 4초동안 게임이 진행됨)

    // 게임 통과할 경우
    function endGame(isSuccess) {
        clearInterval(gameTimer);
        //어떤 키보드를 누르는지 감시하는 코드를 제거한다.
        window.removeEventListener('keydown', handleKeyDown);
        minigameModal.style.display = 'none'; // 모달창 없앰
        if (isSuccess) {
            alert('성공! 욱하는 감정을 억눌렀습니다.');
            applyChoice(respectChoice);
        } else {
            alert('실패! 결국 참지 못하고 마음대로 행동해버렸습니다...');
            const rudeChoice = currentScene.choices.find(c => c.isRude); // 실패 시 무례 선택지를 선택
            applyChoice(rudeChoice);
        }
    }
}
//매너 점수 정산 ================================================
function applyChoice(choice) {
    likeValue += choice.like; // 플레이어의 선택에 따라 점수 조절
    //유저가 무례하게 행동한 상황의 장소를 가져와 저장한다, 저장된 장소의 상황만 다음날 출력
    const loc = scenarios[currentIndex].location;
    if (currentDay === 1) {
        if (choice.isRude === true && !rudeHistory.includes(loc)) rudeHistory.push(loc);
    } else {
        if (choice.isRude === true && !todayRudeEntries.includes(loc)) todayRudeEntries.push(loc);
    }
    const resultDialogues = choice.result.map(function (r) {
        return {location: loc, type: 'dialogue', speaker: r.speaker, text: r.text, bg: r.bg};
    });
    // 선택지에 따라 다른 대사를 출력하기 위함.
    // 시나리오 배열의 현재 위치 바로 뒤에 선택지 결과들을 순서대로 끼워넣음.
    resultDialogues.forEach(function (item, i) { scenarios.splice(currentIndex + 1 + i, 0, item); });
    currentIndex++;
    runScenario(currentIndex);
}
//day가 바뀔 때=======================================================================
function showDayTransition(dayNum, subtitleText, callback) {
    const transScreen = document.getElementById('day-transition-screen');
    const transTitle  = document.getElementById('transition-day-title');
    const transSub    = document.getElementById('transition-day-subtitle');

    if (!transScreen) return;

    // 텍스트 주입
    transTitle.innerText = `Day ${dayNum}`;
    transSub.innerText = subtitleText;

    // 2. 화면 표시 및 스르륵 나타나기 (fade in)
    transScreen.style.display = 'flex';
    setTimeout(() => {
        transScreen.style.opacity = '1';
    }, 50); // display가 flex로 바뀐 뒤 미세한 딜레이를 줘야 opacity 애니메이션이 적용되기 때문에 딜레이 0.5초 적용

    // 2.5초 동안 보여준 뒤 스르륵 사라지기 (Fade Out)
    setTimeout(() => {
        transScreen.style.opacity = '0';

        // 4. 완전히 사라진 후 레이어 숨기고 다음 시나리오 실행
        setTimeout(() => {
            transScreen.style.display = 'none';
            if (callback) callback(); // 다음 day의 첫 대사 실행
        }, 500);

    }, 2500); // 블랙 화면 띄우는 시간
}

//엔딩 페이지 =====================================================================

//가장 무례했던 상황을 파악하기 위함
function saveWeakSituation() {
    // 만약 무례한 행동을 한 적이 아예 없다면 없음 표시
    if (!rudeHistory || rudeHistory.length === 0) {
        localStorage.setItem('weakSituation', '없음 (모두에게 친절함)');
        return;
    }

    // 배열 내 단어들의 빈도수를 계산해서 가장 높은 수를 가진 단어를 가장 무례한 상황으로 판단함.
    const frequency = {};
    let maxCount = 0;
    let mostFrequentSituation = '';

    rudeHistory.forEach(loc => {
        frequency[loc] = (frequency[loc] || 0) + 1;

        // 가장 많이 나타난 단어를 업데이트
        if (frequency[loc] > maxCount) {
            maxCount = frequency[loc];
            mostFrequentSituation = loc;
        }
    });

    // 텍스트 뒤에 설명을 붙여서 저장, 출력
    let displayMapping = mostFrequentSituation;
    if (mostFrequentSituation === '아침') displayMapping = '아침 (가족과의 마찰)';
    if (mostFrequentSituation === '등교길') displayMapping = '등교길 (공공장소에서의 타인에 대한 배려)';
    if (mostFrequentSituation === '교실') displayMapping = '교실 (공동체 생활 및 대인관계 매너)';
    if (mostFrequentSituation === '급식실') displayMapping = '급식실 (기본적인 규칙 준수와 인내심)';
    if (mostFrequentSituation === '카페') displayMapping = '카페 (서비스직 매너 및 타인에 대한 존중 부족)';
    if (mostFrequentSituation === '편의점') displayMapping = '편의점 (본인의 책임 전가 및 이기적인 행동 패턴)';


    localStorage.setItem('weakSituation', displayMapping);
}

function initEndingPage() {
    const cutsceneLayer = document.getElementById('ending-cutscene');
    const cutsceneText  = document.getElementById('cutscene-text');
    const reportPage    = document.getElementById('result-report-page');
    const showReportBtn = document.getElementById('show-report-btn'); // 신규 버튼

    // 최종 day, 점수, 랭크
    const finalDay   = Number(localStorage.getItem('finalDay')) || 2;
    const finalScore = Number(localStorage.getItem('finalScore')) || 100;

    let rankChar = "F", rankTitle = "[악순환에 갇힌 빌런]", reviewText = "", bgImage = "img/bg_bad.png";


    let cutsceneLines = [];

    // 1~6일 (마지노선 7일 전)이 마지막 날이라면
    if (finalDay === 1 || finalDay <= 6) {
        // 해피엔딩
        rankChar = (finalDay === 1) ? "S" : (finalDay <= 3 ? "A" : "B");
        rankTitle = (finalDay === 1) ? "[무결점 존중 마스터]" : (finalDay <= 3 ? "[PRO 개과천선러]" : "[눈치코치 반성문 제출자]");
        bgImage = "image/happy01.png";
        reviewText = (finalDay === 1) ? "경이로운 인성입니다!" : "훌륭하고 빠른 반성입니다!";

        cutsceneLines = [
            "마침내 완벽한 내일이 찾아왔습니다.",
            "지독했던 무례의 굴레와 업보가 사라진 아침.",
            "엄마: \"우리 딸 좋은 아침~ 오늘도 좋은 하루 보내!\"",
            "학교에서 작은 실수를 하더라도 괜찮다고 모두가 당신을 응원해 줍니다.",
            "언행을 되돌아보며 어렵게 참아냈던 그 이성의 순간들이, 마침내 당신의 오늘을 바꾸어 놓았습니다.",
            "욱하는 감정을 이겨내고 당신에게, 어제보다 더 나은 하루가 시작 될 것입니다."
        ];
    }
    // 6일 이상 되면 배드엔딩 실행
    else {
        // 배드엔딩  대사
        bgImage = "image/bad01.png";
        reviewText = "일주일이라는 기회가 주어졌음에도 타인에게 계속해서 무례하게 행동했습니다.";

        cutsceneLines = [
            "눈을 뜨니 차가운 침묵만이 방 안을 감돕니다.",
            "주어진 일주일이라는 시간 동안, 당신은 단 한 걸음도 앞으로 나아가지 못했습니다.",
            "엄마의 다정한 인사도, 친구들의 따뜻한 응원도 없는 외로운 교실.",
            "욱하는 감정을 통제하지 못하는 한, 당신의 오늘과 내일은 영원히 똑같을 것입니다.",
            "타인을 존중하지 않는 한, 당신의 시간은 결코 흐르지 않습니다. 당신은 이 끔찍한 악순환 속에 영원히 갇혔습니다."
        ];
    }

    // 초기 화면 세팅
    cutsceneLayer.style.backgroundImage = `url('${bgImage}')`;
    cutsceneLayer.style.display = 'flex';

    // 첫 번째 대사 즉시 출력
    let lineIndex = 0;
    cutsceneText.innerText = cutsceneLines[lineIndex];

    // 3초마다 대사가 자동으로 넘어가도록(영상 재생되듯이) ───
    const autoPlayTimer = setInterval(() => {
        lineIndex++;

        if (lineIndex < cutsceneLines.length) {
            // 자막 교체
            cutsceneText.innerText = cutsceneLines[lineIndex];
        } else {
            // 모든 대사가 끝나면 타이머 종료
            clearInterval(autoPlayTimer);

            // "대사가 끝났으니 리포트 버튼을 서서히 보여줌"
            showReportBtn.style.display = 'inline-block';
        }
    }, 3000); // 3초마다 다음 대사로 자동 전환

    // 내 선택에 대한 결과 레포트 확인
    //버튼을 누르면 컷씬 레이어가 닫히고 결과창이 뜸
    showReportBtn.onclick = function() {
        cutsceneLayer.style.display = 'none';

        const weakSituation = localStorage.getItem('weakSituation') || '알 수 없음';

        document.getElementById('report-rank-char').innerText = rankChar;
        document.getElementById('report-rank-title').innerText = rankTitle;
        document.getElementById('report-score-val').innerText = finalScore + "점";
        document.getElementById('report-day-val').innerText = "Day " + finalDay;
        document.getElementById('report-review-text').innerText = reviewText;

        document.getElementById('report-weak-situation').innerText = weakSituation;
        const rankBadge = document.getElementById('report-rank-char');
        if (rankChar === "S") rankBadge.style.color = "#ffd700";
        else if (rankChar === "A") rankBadge.style.color = "#4caf50";
        else if (rankChar === "B") rankBadge.style.color = "#ff9800";
        else rankBadge.style.color = "#ff4a4a";

        reportPage.style.display = 'flex';
    };
}

// ──────────────────────────────────────────────────────────

if (isEndingPage) {
    window.addEventListener('DOMContentLoaded', initEndingPage);
} else {
    nextBtn.addEventListener('click', function () { currentIndex++; runScenario(currentIndex); });
    scenarios = day1Scenarios;
    runScenario(0);
}